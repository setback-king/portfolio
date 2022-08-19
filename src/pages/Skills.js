import React from 'react';
import {
  Flex,
  HStack,
  VStack,
  Text,
  Image,
  Heading,
  Box,
} from '@chakra-ui/react';

const Skills = () => {
  return (
    <Flex bg={'blackAlpha.200'} flex="1" p={10} direction="column" w="100vw">
      <Heading ml={3}>Front-End</Heading>
      <Flex p={3} wrap="wrap" gap={5}>
        <VStack>
          <Box bg="white" p={3} borderRadius="2em">
            <Image src="assets/front-end/html5.png" boxSize="100px" />
          </Box>
          <Text>HTML5</Text>
        </VStack>
        <VStack>
          <Box p={3} bg="white" borderRadius="2em">
            <Image src="assets/front-end/css3.png" boxSize="100px" />
          </Box>
          <Text>CSS3</Text>
        </VStack>
        <VStack>
          <Box bg="white" p={3} borderRadius="2em">
            <Image src="assets/front-end/javascript.png" boxSize="100px" />
          </Box>
          <Text>JAVASCRIPT</Text>
        </VStack>
        <VStack>
          <Box bg="white" p={3} borderRadius="2em">
            <Image src="assets/front-end/sass.png" boxSize="100px" />
          </Box>
          <Text>SASS</Text>
        </VStack>
        <VStack>
          <Box bg="white" p={3} borderRadius="2em">
            <Image src="assets/front-end/bootstrap.png" boxSize="100px" />
          </Box>
          <Text>BOOTSTRAP</Text>
        </VStack>
        <VStack>
          <Box bg="white" p={3} borderRadius="2em">
            <Image src="assets/front-end/react.png" boxSize="100px" />
          </Box>
          <Text>REACT</Text>
        </VStack>
        <VStack>
          <Box bg="white" p={3} borderRadius="2em">
            <Image src="assets/front-end/nextjs.png" boxSize="100px" />
          </Box>
          <Text>NEXT</Text>
        </VStack>
        <VStack>
          <Box bg="white" p={3} borderRadius="2em">
            <Image src="assets/front-end/pug.png" boxSize="100px" />
          </Box>
          <Text>PUG</Text>
        </VStack>
        <VStack>
          <Box bg="white" p={3} borderRadius="2em">
            <Image src="assets/front-end/256.png" boxSize="100px" />
          </Box>
          <Text>CHAKRA-UI</Text>
        </VStack>
        <VStack>
          <Box bg="white" p={3} borderRadius="2em">
            <Image src="assets/front-end/redux.png" boxSize="100px" />
          </Box>

          <Text>REDUX</Text>
        </VStack>
      </Flex>
      <Heading ml={3}>Back-End</Heading>
      <Flex></Flex>
      <Heading ml={3}>Tools</Heading>
      <Flex></Flex>
    </Flex>
  );
};

export default Skills;
