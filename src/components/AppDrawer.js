import React from 'react';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  List,
  ListItem,
  Heading,
  keyframes,
} from '@chakra-ui/react';

const DrawerList = () => {
  const listItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Categories',
      link: '/categories',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];

  return listItems.map((item) => {
    <ul>
      <Link href={item.link} key={nanoid()}>
        <li>{item.name}</li>
      </Link>
      ;
    </ul>;
  });
};

const AppDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer size="md" placement="left" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader py={8}>
          <Heading>My Blog</Heading>
        </DrawerHeader>
        <DrawerBody>
          <DrawerList onClose={onClose} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default AppDrawer;
