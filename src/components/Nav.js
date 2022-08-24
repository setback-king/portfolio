import React from 'react';
import { HStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ReuseButton from './Button';

const Nav = () => {
  return (
    <HStack ml={4} spacing={8} align="center">
      <ReuseButton name="About" linkUrl="/about" variant="link" color="black" />
      <ReuseButton
        name="Skills"
        linkUrl="/skills"
        variant="link"
        color="black"
      />
      <ReuseButton
        name="Projects"
        linkUrl="/projects"
        variant="link"
        color="black"
      />
      <ReuseButton
        name="Contact"
        linkUrl="/contact"
        variant="link"
        color="black"
      />
    </HStack>
  );
};

export default Nav;
