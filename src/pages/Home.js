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
          src="portfolio/assets/IMG_0269.JPG"
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
                .pauseFor(2500)
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();
            }}
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
          linkUrl="/portfolio/about"
          name="EXPLORE MY JOURNEY"
          ontStyle="italic"
          size="25px"
        ></ReuseButton>
      </Box>

      <Image boxSize="200px" src="portfolio/assets/squiggle_icon_126929.png" />
    </Flex>
  );
};

export default Home;
