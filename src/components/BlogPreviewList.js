import React from 'react';

import { nanoid } from 'nanoid';

import { Box, Heading } from '@chakra-ui/react';
import BlogPreviewCard from './Blog/BlogPreviewCard';

const BlogPreviewList = ({ header, blogs }) => {
  return (
    <>
      <Box mt={8} mb={16}>
        <Heading
          sx={{
            textTransform: 'uppercase',
            mb: 8,
            fontSize: '5xl',
          }}>
          {header}
        </Heading>
        {/* {Array(10)
          .fill(0)
          .map(() => (
            <BlogPreviewCard key={nanoid()} />
          ))} */}{' '}
        {/* Dummy loop array*/}
        {blogs.map((blog) => (
          <BlogPreviewCard {...blog} key={nanoid()} />
        ))}
      </Box>
    </>
  );
};

export default BlogPreviewList;
