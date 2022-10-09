import React from 'react';
import { Flex, Spinner, Center } from '@chakra-ui/react';
import Project from '../components/Project';
import ProjectsData from '../data/ProjectsData.json';
import { useMediaQuery } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const Projects = () => {
  const [isNotSmallerScreen] = useMediaQuery('(max-width: 650px)');

  const projectElements = ProjectsData.map(project => {
    return (
      <Project
        img={project.img}
        img2={project.img2}
        img3={project.img3}
        title={project.title}
        description={project.description}
        code={project.code}
        live={project.live}
        last={project.last}
        index={project.index}
      />
    );
  });

  return (
    <Flex
      className="fade"
      flex="1"
      wrap="wrap"
      bg={'blackAlpha.200'}
      direction="column"
    >
      {projectElements}
    </Flex>
  );
};

export default Projects;
