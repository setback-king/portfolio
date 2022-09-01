import {
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Highlight,
  Image,
  Box,
  IconButton,
  useMediaQuery,
} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import React from 'react';
import { icons } from 'react-icons';
import ReuseButton from '../components/Button';
import { FaTractor, FaLaptopCode, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <Flex
      textAlign="center"
      align="center"
      justify="center"
      bg={'blackAlpha.200'}
      p={4}
      direction="column"
      flex="1"
      className="fade home"
    >
      <VStack gap={3} p={10}>
        <Heading letterSpacing={2}>HI, I'M BEN ZENTEK. </Heading>
        <Image
          borderRadius="full"
          border="solid 2px black"
          boxSize="150px"
          src="assets/Screen Shot 2022-09-01 at 11.08.01 AM.png"
          alt="Ben Zentek"
          objectFit="cover"
        />
        <Heading fontStyle="italic" size="lg" letterSpacing={2}>
          <Typewriter
            onInit={typewriter => {
              typewriter
                .typeString('front-end developer')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(2000)
                .deleteAll()
                .typeString('self-taught')
                .pauseFor(2000)
                .deleteAll()
                .typeString('farmer to developer')
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
            options={{ loop: true }}
          />
        </Heading>
      </VStack>
      <Flex className="slide" gap={12} alignItems="center" mt={4} mb={12}>
        <FaTractor fontSize={40} />
        <FaArrowRight fontSize={25} />
        <FaLaptopCode fontSize={40} />
      </Flex>
      <Box className="slideRight">
        <ReuseButton
          linkUrl="/about"
          color="teal"
          variant="solid"
          name="EXPLORE MY JOURNEY"
          ontStyle="italic"
          size="25px"
        ></ReuseButton>
      </Box>

      <Image boxSize="200px" src="assets/squiggle_icon_126929.png" />
    </Flex>
  );
};

export default Home;
