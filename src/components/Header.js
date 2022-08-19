import {
  Flex,
  Spacer,
  Box,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  IconButton,
  useColorMode,
  useMediaQuery,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  FaSun,
  FaMoon,
  FaHome,
  FaGithubSquare,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import ReuseButton from './Button';
import Nav from './Nav';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const [isNotSmallerScreen] = useMediaQuery('(max-width: 550px)');
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  return (
    <Flex boxShadow="xl" alignItems="center" p={4} gap={4} bg={'whiteAlpha.50'}>
      {!hamburgerClicked ? (
        <HStack gap={5} direction="row">
          <Link to="/">
            <FaHome fontSize="25px" />
          </Link>
          <a href="https://github.com/setback-king">
            <FaGithub fontSize="25px" />
          </a>
          <a href="https://linkedin.com/in/ben-zentek">
            <FaLinkedin fontSize="25px" />
          </a>
        </HStack>
      ) : (
        <Nav />
      )}
      <Spacer />
      {!isNotSmallerScreen ? (
        <Nav />
      ) : (
        <Button
          mr={-10}
          variant="ghost"
          onClick={() => setHamburgerClicked(prev => !prev)}
        >
          {hamburgerClicked ? (
            <CloseIcon w={4} h={4} />
          ) : (
            <HamburgerIcon w={6} h={6} />
          )}
        </Button>
      )}

      <IconButton
        ml={8}
        icon={isDark ? <FaSun /> : <FaMoon />}
        isRound="true"
        onClick={toggleColorMode}
      ></IconButton>
    </Flex>
  );
};

export default Header;
