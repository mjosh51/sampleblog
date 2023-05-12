import Link from 'next/link';
import {
  Link as ChakraLink,
  Text,
  Button,
  Box,
  LinkOverlay,
  useColorMode,
} from '@chakra-ui/react';

const ChakraNextLink = ({
  href,
  ChakraComponent = Box,
  children,
  chakraLinkProps = {},
  ...props
}) => {
  return (
    <Link href={href} passHref>
      <ChakraLink {...chakraLinkProps}>
        <ChakraComponent {...props}>{children}</ChakraComponent>
      </ChakraLink>
    </Link>
  );
};

const ChakraButtonLink = (props) => {
  <ChakraNextLink ChakraComponent={Button} {...props} />;
};

export { ChakraButtonLink };

export default ChakraNextLink;
