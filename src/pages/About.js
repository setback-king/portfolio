import React from 'react';
import {
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  Spacer,
  HStack,
  useMediaQuery,
  Container,
} from '@chakra-ui/react';
import {
  FaSeedling,
  FaCarrot,
  FaPepperHot,
  FaCode,
  FaLaptop,
  FaServer,
} from 'react-icons/fa';

const About = () => {
  const [isNotSmallerScreen] = useMediaQuery('(max-width: 650px)');

  return (
    <Flex
      flex="1"
      justify="center"
      p={4}
      bg={'blackAlpha.200'}
      className="fade"
    >
      <HStack gap={16}>
        {!isNotSmallerScreen && (
          <Flex direction="column" h="100%" p={4}>
            <FaSeedling fontSize="25px" />
            <Spacer />
            <FaCarrot fontSize="25px" />
            <Spacer />
            <FaPepperHot fontSize="25px" />
          </Flex>
        )}
        <Container flex="1">
          <Heading>About me</Heading>
          <br />
          Upon graduation of college in 2015, I began to work on my family's
          flower and vegetable farm. As a business administration major, I used
          my newly acquired knowledge to help run the farm. For many years I was
          satisfied with my career, however over time I realized that I wanted
          to go in a different direction. This thought of a career change led me
          to begin my self-taught journey of becoming a front-end developer.
          <br /> <br />
          <Heading fontStyle="italic" fontSize="22px">
            From Farmer to Coder
          </Heading>
          <br />
          For the past year, I have been working tediously to fulfill my vision
          of becoming a front-end developer. During this period of learning, I
          have continued to work on my family's flower and vegetable farm. All
          my free time after work has been used to further my knowledge and
          skills of HTML, CSS, and Javascript. I am extremely grateful for the
          many online courses, Youtube Channels, Discord groups, etc. that have
          assisted me in my learning journey. In particular, I am very thankful
          for the team behind The Odin Project. Completing TOP immensely helped
          me to become confident in my skills and to continuously challenge
          myself. I can't wait to be able to give back to the community that has
          helped me grow.
          <br />
          <br />
          <Heading fontStyle="italic" fontSize="22px">
            What's Next?
          </Heading>
          <br />
          Finally, it is time for me to show employers what I am capable of.
          Although there is always more to learn, I am confident that my current
          level of knowledge and skills is more than adequate to provide value
          to a company. I am excited to begin this next step in my career.
          Eventually, it is my goal to become a fullstack developer. To achieve
          this, I will continue to dedicate my free time to learning other
          languages, frameworks, and tools.
          <br />
          <br />
          <Heading fontStyle="italic" fontSize="22px">
            Bonus Blurb
          </Heading>
          <br />
          Growing up on a farm has led me to have great appreciation and respect
          for nature. Being outdoors and active is a big part of my everyday
          routine. I enjoy reading books about history, horror, and fantasy
          fiction. My favorite hobbies are ping pong, cards, and playing Catan
          with friends.
          <Heading mt={4} fontSize="20px">
            - Ben Zentek
          </Heading>
        </Container>
        {!isNotSmallerScreen && (
          <Flex direction="column" h="100%" p={4}>
            <FaCode fontSize="25px" />
            <Spacer />
            <FaLaptop fontSize="25px" />
            <Spacer />
            <FaServer fontSize="25px" />
          </Flex>
        )}
      </HStack>
    </Flex>
  );
};

export default About;
