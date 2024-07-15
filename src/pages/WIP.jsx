import { Heading, VStack, Center, Image, Text, Box } from "@chakra-ui/react";
import React from 'react';

const WIP = () => {
  return (
    <Box w="100vw" h="100vh" bg="brand.300">
      <VStack w="100%" h="100%" justify="center" align="center" spacing={4}>
      <Image 
          src='/ej-yao-D46mXLsQRJw-unsplash.jpg' 
          alt='Under Construction' 
          boxSize="300px"
          borderRadius="50%"
          objectFit="cover"
        />
        <Heading color="brand.200" fontSize="4xl">Work in Progress</Heading>
        <Text fontWeight={500}>Armoury is still under construction. Please check back later.</Text>
        
      </VStack>
    </Box>
  );
}

export default WIP;
