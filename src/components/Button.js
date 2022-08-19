import React from 'react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ReuseButton = ({ linkUrl, name, size, border }) => {
  return (
    <Button
      style={{ textDecoration: 'none', transition: 'transform .2s' }}
      colorScheme="black"
      variant="link"
      _hover={{ transform: 'scale(1.07)' }}
      fontSize={size}
      border={border}
    >
      <Link to={linkUrl}>{name}</Link>
    </Button>
  );
};

export default ReuseButton;
