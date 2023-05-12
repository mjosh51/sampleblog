import React from 'react';
import { Container, Center, Text } from '@chakra-ui/react';
import AppHeader from './AppHeader';
import ToggleColorMode from './ToggleColorMode';

const PageLayout = ({ children }) => {
  return (
    <>
      <AppHeader />
      <Container px={4} maxW="5xl">
        {children}
      </Container>
      <Center m="2rem 0">
        <Text>&copy;Copyright Josh Blog 2022</Text>
      </Center>
      <ToggleColorMode />
    </>
  );
};

export default PageLayout;
