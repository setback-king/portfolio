import React from 'react';
import {
  Flex,
  HStack,
  VStack,
  Spacer,
  Text,
  Image,
  useMediaQuery,
  Heading,
  Box,
} from '@chakra-ui/react';

const Skills = () => {
  const [isNotSmallerScreen] = useMediaQuery('(max-width: 550px)');

  return (
    <Flex
      align={isNotSmallerScreen ? 'center' : ''}
      bg={'blackAlpha.200'}
      flex="1"
      p={10}
      direction="column"
      w="100vw"
      className="fade skills"
    >
      <Heading className="slide" ml={3}>
        Front-End
      </Heading>
      <Flex
        p={3}
        wrap="wrap"
        gap={5}
        justify={isNotSmallerScreen ? 'center' : ''}
        className="slide"
      >
        <VStack>
          <Box
            bg="white"
            p={3}
            borderRadius="2em"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image src="assets/front-end/html5.png" boxSize="100px" />
          </Box>
          <Text>HTML5</Text>
        </VStack>
        <VStack>
          <Box
            _hover={{ transform: 'scale(1.1)' }}
            p={3}
            bg="white"
            borderRadius="2em"
          >
            <Image src="assets/front-end/css3.png" boxSize="100px" />
          </Box>
          <Text>CSS3</Text>
        </VStack>
        <VStack>
          <Box
            bg="white"
            p={3}
            borderRadius="2em"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image src="assets/front-end/javascript.png" boxSize="100px" />
          </Box>
          <Text>JAVASCRIPT</Text>
        </VStack>
        <VStack>
          <Box
            bg="white"
            p={3}
            borderRadius="2em"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image
              src="assets/front-end/sass.png"
              boxSize="100px"
              objectFit="contain"
            />
          </Box>
          <Text>SASS</Text>
        </VStack>
        <VStack>
          <Box
            bg="white"
            p={3}
            borderRadius="2em"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image
              src="assets/front-end/bootstrap.png"
              boxSize="100px"
              objectFit="contain"
            />
          </Box>
          <Text>BOOTSTRAP</Text>
        </VStack>
        <VStack>
          <Box
            bg="white"
            p={3}
            borderRadius="2em"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image src="assets/front-end/react.png" boxSize="100px" />
          </Box>
          <Text>REACT</Text>
        </VStack>
        <VStack>
          <Box
            bg="white"
            p={3}
            borderRadius="2em"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image
              src="assets/front-end/nextjs.png"
              boxSize="100px"
              objectFit="contain"
            />
          </Box>
          <Text>NEXT</Text>
        </VStack>
        <VStack>
          <Box
            bg="white"
            p={3}
            borderRadius="2em"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image src="assets/front-end/pug.png" boxSize="100px" />
          </Box>
          <Text>PUG</Text>
        </VStack>
        <VStack>
          <Box
            bg="white"
            p={3}
            borderRadius="2em"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image src="assets/front-end/256.png" boxSize="100px" />
          </Box>
          <Text>CHAKRA-UI</Text>
        </VStack>
        <VStack>
          <Box
            bg="white"
            p={3}
            borderRadius="2em"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image
              src="assets/front-end/redux.png"
              boxSize="100px"
              objectFit="contain"
            />
          </Box>

          <Text>REDUX</Text>
        </VStack>
      </Flex>
      <Spacer />
      <Heading className="slideRight" ml={3}>
        Back-End
      </Heading>
      <Flex
        p={3}
        wrap="wrap"
        gap={5}
        justify={isNotSmallerScreen ? 'center' : ''}
        className="slideRight"
      >
        <VStack>
          <Box
            p={3}
            bg="white"
            borderRadius="2em"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image src="assets/back-end/nodejs.png" boxSize="100px" />
          </Box>
          <Text>NODEJS</Text>
        </VStack>
        <VStack>
          <Box
            p={3}
            bg="white"
            borderRadius="2em"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image
              src="assets/back-end/express.png"
              boxSize="100px"
              objectFit="contain"
            />
          </Box>
          <Text>EXPRESS</Text>
        </VStack>
        <VStack>
          <Box
            p={3}
            bg="white"
            borderRadius="2em"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image src="assets/back-end/mongodb.png" boxSize="100px" />
          </Box>
          <Text>MongoDB</Text>
        </VStack>
        <VStack>
          <Box
            p={3}
            px={5}
            bg="white"
            borderRadius="2em"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image
              src="assets/back-end/mongoose.png"
              boxSize="100px"
              objectFit="contain"
            />
          </Box>
          <Text>MONGOOSE</Text>
        </VStack>
        <VStack>
          <Box
            p={3}
            bg="white"
            borderRadius="2em"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image
              src="assets/back-end/firebase.png"
              boxSize="100px"
              objectFit="contain"
            />
          </Box>
          <Text>FIREBASE</Text>
        </VStack>
        <VStack>
          <Box
            p={3}
            bg="white"
            borderRadius="2em"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image
              src="assets/back-end/rq-logo.png"
              boxSize="100px"
              objectFit="contain"
            />
          </Box>
          <Text>REACT-QUERY</Text>
        </VStack>
      </Flex>
      <Spacer />
      <Heading className="slide" ml={3}>
        Tools
      </Heading>
      <Flex
        p={3}
        wrap="wrap"
        gap={5}
        justify={isNotSmallerScreen ? 'center' : ''}
        className="slide"
      >
        <VStack>
          <Box
            p={3}
            bg="white"
            borderRadius="2em"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image src="assets/other/git.png" boxSize="100px" />
          </Box>
          <Text>GIT</Text>
        </VStack>{' '}
        <VStack>
          <Box
            p={3}
            bg="white"
            borderRadius="2em"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image src="assets/other/npm.png" boxSize="100px" />
          </Box>
          <Text>NPM</Text>
        </VStack>{' '}
        <VStack>
          <Box
            p={3}
            bg="white"
            borderRadius="2em"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image src="assets/other/heroku.png" boxSize="100px" />
          </Box>
          <Text>HEROKU</Text>
        </VStack>{' '}
        <VStack>
          <Box
            p={3}
            bg="white"
            borderRadius="2em"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image
              src="assets/other/jest.png"
              boxSize="100px"
              objectFit="contain"
            />
          </Box>
          <Text>JEST</Text>
        </VStack>
        <VStack>
          <Box
            p={3}
            bg="white"
            borderRadius="2em"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image src="assets/other/github.png" boxSize="100px" />
          </Box>
          <Text>GitHub</Text>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Skills;
