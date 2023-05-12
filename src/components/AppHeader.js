import React from 'react';
import Image from 'next/image';
import { Flex, Spacer, Box, IconButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import logo from '../images/logo.svg';
import AppDrawer from './AppDrawer';
import Link from 'next/link';

const CustomIconButton = ({ Icon, ...props }) => {
  return <IconButton icon={<Icon />} {...props} size="lg" ml="1rem" />;
};

const HamburgerNav = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <CustomIconButton Icon={HamburgerIcon} onClick={onOpen} />
      {isOpen && <AppDrawer isOpen={isOpen} onClose={onClose} />}
    </>
  );
};

const Logo = () => {
  const dimension = 40;
  return (
    <Link href="/" style={{ textDecoration: 'none' }}>
      <a>
        <Image
          src={logo}
          width={dimension}
          height={dimension}
          alt="sample logo"
        />
      </a>
    </Link>
  );
};

const AppHeader = () => {
  return (
    <Box px="2rem" pt="2rem">
      <Flex alignItems="center">
        <Logo />
        <Spacer />
        <CustomIconButton Icon={SearchIcon} />
        <HamburgerNav />
      </Flex>
    </Box>
  );
};

export default AppHeader;
