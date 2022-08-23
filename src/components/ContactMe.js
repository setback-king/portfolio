import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
} from 'react-icons/fa';
import {
  Flex,
  Spacer,
  Input,
  Textarea,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

export const ContactMe = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wrloq1d',
        'template_7bvxu4j',
        form.current,
        'kF5Iisz1RcvFPu0IW'
      )
      .then(
        result => {
          e.target.reset();
          setIsSent(true);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '400px',
    marginBottom: '35px',
  };

  const bg = useColorModeValue('white', 'whiteAlpha.50');
  const buttonBg = useColorModeValue('black', 'whiteAlpha.50');

  return (
    <Flex direction="column" w="400px" bg="WhiteAlpha.50">
      <VStack gap={4} borderRadius="2em" p={6}>
        {!isSent ? (
          <VStack>
            {' '}
            <Heading mb="30px" fontSize="40px">
              Get in touch.
            </Heading>
            <form ref={form} onSubmit={sendEmail} style={formStyle}>
              <label>Your Name *</label>
              <Input bg={bg} type="text" name="user_name" required />
              <label>Your Email *</label>
              <Input bg={bg} type="email" name="user_email" required />
              <label>Message *</label>
              <Textarea name="message" bg={bg} required />
              <Input
                alignSelf="center"
                bg={buttonBg}
                type="submit"
                color="white"
                cursor="pointer"
                value="Send"
                w="40%"
                mt={4}
              />
            </form>
          </VStack>
        ) : (
          <Flex align="center" gap={7}>
            <FaTelegramPlane size="50px" />
            <Heading mb={6} w="400px">
              Thank you for submitting a message.
            </Heading>
          </Flex>
        )}
        <Heading fontSize="2xl" fontStyle="italic">
          Also reach me at:
        </Heading>
        <Flex align="center" gap="3" fontSize="20px">
          <FaEnvelope />
          <Text>bpzentek@gmail.com</Text>
        </Flex>
        <Flex align="center" gap="3" fontSize="20px">
          <FaPhone />
          <Text>(203) 537-1046</Text>
        </Flex>
        <Flex gap={4}>
          <a href="https://github.com/setback-king">
            <FaGithub fontSize="30px" />
          </a>
          <a href="https://linkedin.com/in/ben-zentek">
            <FaLinkedin fontSize="30px" />
          </a>
        </Flex>
      </VStack>
    </Flex>
  );
};
