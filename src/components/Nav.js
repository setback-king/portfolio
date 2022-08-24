import React from 'react';
import { HStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ReuseButton from './Button';

const Nav = () => {
  return (
    <HStack ml={4} spacing={8} align="center">
      <ReuseButton name="About" linkUrl="/portfolio/about" />
      <ReuseButton name="Skills" linkUrl="/portfolio/skills" />
      <ReuseButton name="Projects" linkUrl="/portfolio/projects" />
      <ReuseButton name="Contact" linkUrl="/portfolio/contact" />
    </HStack>
  );
};

export default Nav;
