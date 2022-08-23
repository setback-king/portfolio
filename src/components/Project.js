import React from 'react';
import {
  Flex,
  HStack,
  Text,
  Image,
  Spacer,
  Box,
  VStack,
  Heading,
  Divider,
  Container,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { FaLink, FaCode } from 'react-icons/fa';
import ImageSlider from './ImageSlider';

const Project = ({
  title,
  description,
  code,
  live,
  tools,
  last,
  img,
  img2,
  img3,
  index,
}) => {
  const [isNotSmallerScreen] = useMediaQuery('(max-width: 1000px)');

  const bgs = useColorModeValue('blackAlpha.300', 'whiteAlpha.300');
  const skewedProjects =
    index % 2 === 0 && !isNotSmallerScreen ? (
      <>
        <VStack w={isNotSmallerScreen ? '100%' : '50%'} h="380px">
          <ImageSlider img={img} img2={img2} img3={img3} />
        </VStack>
        <VStack gap={5}>
          {!isNotSmallerScreen && <Heading>{title}</Heading>}
          <Container>{description}</Container>
          <HStack gap="50px">
            <VStack gap={2}>
              <a href={code} target="_blank">
                <FaCode fontSize="35px" />
              </a>
              <Text fontStyle="italic">Code</Text>
            </VStack>
            <VStack gap={2}>
              <a href={live} target="_blank">
                <FaLink fontSize="35px" />
              </a>
              <Text fontStyle="italic">Live</Text>
            </VStack>
          </HStack>
        </VStack>
      </>
    ) : (
      <>
        <VStack gap={5}>
          {!isNotSmallerScreen && <Heading>{title}</Heading>}
          <Container>{description}</Container>
          <HStack gap="50px">
            <VStack gap={2}>
              <a href={code} target="_blank">
                <FaCode fontSize="35px" />
              </a>
              <Text fontStyle="italic">Code</Text>
            </VStack>
            <VStack gap={2}>
              <a href={live} target="_blank">
                <FaLink fontSize="35px" />
              </a>
              <Text fontStyle="italic">Live</Text>
            </VStack>
          </HStack>
        </VStack>
        <VStack w={isNotSmallerScreen ? '100%' : '50%'} h="380px">
          <ImageSlider img={img} img2={img2} img3={img3} />
        </VStack>
      </>
    );

  return (
    <Flex direction="column" align="center" w="100%">
      <Flex
        align={isNotSmallerScreen ? 'center' : 'center'}
        mb="20px"
        gap="20px"
        py={4}
        direction={isNotSmallerScreen ? 'column' : 'row'}
        justify="center"
      >
        {' '}
        {isNotSmallerScreen && <Heading>{title}</Heading>}
        {skewedProjects}
      </Flex>

      {!last && <Divider borderWidth={2} borderColor={bgs} />}
    </Flex>
  );
};

export default Project;
