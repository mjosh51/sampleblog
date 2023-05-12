import React from 'react';
import Image from 'next/image';
import postImage from '../../images/children.jpg';
import { nanoid } from 'nanoid';
import {
  Flex,
  Box,
  HStack,
  VStack,
  Text,
  Heading,
  LinkBox,
  LinkOverlay,
  Button,
  Link,
} from '@chakra-ui/react';

const BlogPreviewCard = ({
  banner,
  title,
  description,
  slug,
  altText,
  createdAt,
  readingTime,
  totalViews,
  customID,
}) => {
  const link = `/blog/${slug}`;
  return (
    <>
      <Link href={link} style={{ textDecoration: 'none' }}>
        <VStack as={LinkBox} align="start" spacing="1rem" mb="2rem">
          <Box w="100%">
            <Image
              src={banner}
              alt={altText}
              width={16}
              height={9}
              layout="responsive"
              objectFit="cover"
            />
          </Box>
          <Heading>{title}</Heading>
          <HStack spacing="1rem" wrap="wrap" textTransform="uppercase">
            <Text>{createdAt}</Text>
            <Text>{totalViews} views</Text>
            <Text>{readingTime}</Text>
          </HStack>
          <Text noOfLines={3}>{description}</Text>

          <Button textTransform="uppercase">read more</Button>

          {/* <ChakraButtonLink href="/blog2">Read more</ChakraButtonLink> */}
        </VStack>
      </Link>
    </>
  );
};

export default BlogPreviewCard;
