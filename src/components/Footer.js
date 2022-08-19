import React from 'react';
import { Flex, Text, Spacer, HStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Flex color="black" justify="center" p={4} bg={'whiteAlpha.50'} gap={10}>
      <Text>Created by Ben Zentek © 2022 </Text>
    </Flex>
  );
};

export default Footer;
