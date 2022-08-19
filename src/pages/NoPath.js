import React from 'react';
import { Flex } from '@chakra-ui/react';

const NoPath = () => {
  return (
    <Flex bg={'blackAlpha.200'} fontSize="30px" justify="center" flex="1" p={4}>
      Uh oh, there is nothing here. Incorrect link :/
    </Flex>
  );
};

export default NoPath;
