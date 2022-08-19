import React from 'react';
import { HStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ReuseButton from './Button';

const Nav = () => {
  return (
    <HStack ml={4} spacing={8} align="center">
      <ReuseButton name="About" linkUrl="/about" />
      <ReuseButton name="Skills" linkUrl="/skills" />
      <ReuseButton name="Projects" linkUrl="/projects" />
      <ReuseButton name="Contact" linkUrl="/contact" />
    </HStack>
  );
};

export default Nav;
