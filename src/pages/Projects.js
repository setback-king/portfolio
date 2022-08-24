import React from 'react';
import { Flex, Spinner, Center } from '@chakra-ui/react';
import Project from '../components/Project';
import ProjectsData from '../data/ProjectsData.json';
import { useMediaQuery } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const Projects = () => {
  const [isNotSmallerScreen] = useMediaQuery('(max-width: 650px)');
  const [imgLoaded, setImgLoaded] = useState(false);

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

  useEffect(() => {
    setTimeout(() => {
      setImgLoaded(true);
    }, 1500);
  }, []);

  return (
    <Flex
      className="fade"
      flex="1"
      wrap="wrap"
      bg={'blackAlpha.200'}
      direction="column"
    >
      {imgLoaded ? (
        projectElements
      ) : (
        <Center mt="50px">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      )}
    </Flex>
  );
};

export default Projects;
