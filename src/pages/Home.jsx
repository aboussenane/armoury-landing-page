import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box
      w="100vw"
      h="75vh"
      backgroundImage="url('./Home-background.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      position="relative"
      overflow="hidden"
      m={0}
      p={0}
      border={'solid'}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        
        backdropFilter="blur(10px)"
        zIndex={1}
        
      >
        <Container maxW="container.lg" pt={16} zIndex={2} position="relative">
          <Heading as="h1" size="2xl" mb={4} textAlign="left" color="brand.300">
            Welcome to Armoury
          </Heading>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
