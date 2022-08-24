import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Flex,
  Grid,
  theme,
} from '@chakra-ui/react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectPage from './pages/ProjectPage';
import Skills from './pages/Skills';
import NoPath from './pages/NoPath';
import Contact from './pages/Contact';
import customTheme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Flex direction="column" h="100vh" className="body">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/skills" element={<Skills />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/contact" element={<Contact />} />
          <Route path="*" element={<NoPath />} />
        </Routes>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
