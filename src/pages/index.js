import Head from 'next/head';
import React from 'react';
import { Heading } from '@chakra-ui/react';
import connectDB from 'mongoose/connectDB';
import matter from 'gray-matter';

import BlogPreviewList from '../components/BlogPreviewList';
import getFileNames from 'utils/getFileNames';
import readBlogFiles from 'utils/readBlogFiles';
import readingTime from 'reading-time';
import Blog from 'mongoose/models/Blog';

const Home = ({ topBlogs, recentBlogs }) => {
  return (
    <>
      <Head>
        <title>My first blog design with NextJS</title>
      </Head>

      <BlogPreviewList header="Top Blogs" blogs={topBlogs} />
      <BlogPreviewList header="Recent Blogs" blogs={recentBlogs} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  await connectDB();

  const fileNames = getFileNames();
  const allParsedData = fileNames.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const parsedFile = readBlogFiles(fileName);

    const { data, content } = matter(parsedFile);

    data.readingTime = readingTime(content).text;
    data.slug = slug;
    data.content = content;

    return data;
  });

  const bulkBlogUpdateArray = allParsedData.map((blog) => ({
    updateOne: {
      filter: { _id: blog._id },
      update: {
        $set: blog,
      },
      upsert: true,
      setDefaultOnInsert: true,
    },
  }));

  const project = {
    _id: 0,
    _v: 0,
    content: 0,
  };
  const limit = 10;
  await Blog.bulkWrite(bulkBlogUpdateArray);
  const topBlogsResult = await Blog.find({}, project)
    .sort('-totalViews')
    .limit(limit);
  const recentBlogsResult = await Blog.find({}, project)
    .sort('-createdAt')
    .limit(limit);

  const topBlogs = topBlogsResult.map((blog) => {
    const blogObject = blog.toObject();
    blogObject.createdAt = blogObject.createdAt.toDateString();

    return blogObject;
  });

  const recentBlogs = recentBlogsResult.map((blog) => {
    const blogObject = blog.toObject();
    blogObject.createdAt = blogObject.createdAt.toDateString();

    return blogObject;
  });

  return {
    props: { topBlogs, recentBlogs },
  };
};
