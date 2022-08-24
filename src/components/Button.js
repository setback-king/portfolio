import React from 'react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ReuseButton = ({ linkUrl, name, size, color, border, variant }) => {
  return (
    <Button
      style={{ transition: 'transform .2s' }}
      colorScheme={color}
      variant={variant}
      _hover={{ transform: 'scale(1.07)' }}
      fontSize={size}
      border={border}
    >
      <Link to={linkUrl}>{name}</Link>
    </Button>
  );
};

export default ReuseButton;
