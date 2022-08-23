import React from 'react';
import { Flex, VStack, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import { ContactMe } from '../components/ContactMe';

const Contact = () => {
  const [isNotSmallerScreen] = useMediaQuery('(max-width: 550px)');
  return (
    <Flex
      bg={'blackAlpha.200'}
      flex="1"
      p={4}
      align="center"
      justify="center"
      direction="column"
      className="fade"
    >
      <ContactMe />
    </Flex>
  );
};

export default Contact;
