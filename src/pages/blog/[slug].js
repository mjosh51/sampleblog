import React from 'react';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import connectDB from 'mongoose/connectDB';
import Blog from 'mongoose/models/Blog';

import BlogHead from 'components/Blog/BlogHead';

import MdxComponents from 'components/Mdx/MdxComponents';

const BlogPage = ({ mdxSource, blogData }) => {
  return (
    <>
      <BlogHead {...blogData} />
      <MDXRemote {...mdxSource} components={MdxComponents} />
    </>
  );
};

export const getStaticProps = async ({ params: { slug } }) => {
  await connectDB();

  const project = {
    _id: 0,
    _v: 0,
  };

  const result = await Blog.findOne({ slug });

  const { content, createdAt, ...blogData } = result.toObject();

  const mdxSource = await serialize(content);
  blogData.createdAt = createdAt.toDateString(); // Convert createdAt Object to string
  return {
    props: { mdxSource, blogData },
  };
};

export const getStaticPaths = async () => {
  await connectDB();

  const slugs = await Blog.find({}, 'slug');

  const paths = slugs.map((item) => ({
    params: {
      slug: item.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogPage;
