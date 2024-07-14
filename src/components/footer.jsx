
import { Box, Center, VStack, Link} from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Center>
      <Box bg='whitesmoke' p='10' w='100vw' h='10vh' display='flex' justifyContent='center' alignItems='center' position='absolute' bottom='0' left='0' right='0'>
        <VStack display='flex' justifyContent='center' alignItems='center' position='relative'>
          
          <Box>
            &copy; {new Date().getFullYear()} Armoury. All Rights Reserved.
          </Box>
        </VStack>
      </Box>
    </Center>
  );
};

export default Footer;