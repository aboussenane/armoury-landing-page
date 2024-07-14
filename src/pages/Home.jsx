import React from 'react';
import { Box, 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Container, Heading, Text, VStack, Stack, Image,
  Center} from '@chakra-ui/react';

const Home = () => {
  return (
    <Box
      w="100vw"
      h="100%"
      position="relative"
      overflow="hidden"
      m={0}
      p={0}
      border={'solid'}
      
     
    >
    <VStack>
      <Box
        w="100vw"
        h="75vh"
        position="relative"
        top={50}
        left={0}
        right={0}
        bottom={0}
        backgroundImage="url('./Home-background.jpg')"
        backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
        
        zIndex={1}
        
      >
        <Container  maxW="container.md" pt={16} top={150} zIndex={2} position="relative" color="brand.300">
          <Text>HOW IT WORKS</Text>
          <Heading as="h1" size="4xl" mb={4} textAlign="left" >
          5 easy steps to take control over your inventory
          </Heading>
          <Text>From smooth reservations to easy check-outs</Text>
        </Container>

      </Box>
      
      <Box
        w="100vw"
        h="50vh"
        position="relative"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor={'brand.300'}
        
        zIndex={1}
      >
      <Stack position="relative" top={150} direction={{ base: 'column', md: 'row' }}>
      <Container maxW="container.sm" pt={16} zIndex={2} position="relative"  color="brand.200">
          
          <Heading as="h1" size="4xl" mb={4} textAlign="left" >
          1. Import your inventory
          </Heading>
          <Text fontSize={20}>Upload all your gear in one click. Easily add information such as brand, model, warranty dates, purchase price, etc. Armoury automatically adds the right picture.</Text>
      </Container>
      <Image src={'./Group-345.png'} alt="" h={400} mr={16}/>
      </Stack>
        
      </Box>
      <Box
        w="100vw"
        h="50vh"
        position="relative"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor={'brand.300'}
        
        zIndex={1}
      >
      <Stack position="relative" top={150} direction={{ base: 'column', md: 'row' }} >
      
      <Image src={'./visual-square-12_2022-07-26-091100_odzy.png'} alt="" h={400} ml={16}/>
      <Container maxW="container.sm" pt={16} zIndex={2} position="relative"  color="brand.200">
          
          <Heading as="h1" size="4xl" mb={4} textAlign="left" >
          2. Personalize your workflow
          </Heading>
          <Text fontSize={20}>Multiple locations or gear cages? No problem. Personalize user access? We’ve got you. Configure Cheqroom to make it work for you.</Text>
      </Container>
      </Stack>
        
      </Box>
      <Box
        w="100vw"
        h="50vh"
        position="relative"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor={'brand.300'}
        
        zIndex={1}
      >
      <Stack position="relative" top={150} direction={{ base: 'column', md: 'row' }}>
      <Container maxW="container.sm" pt={16} zIndex={2} position="relative"  color="brand.200">
          
          <Heading as="h1" size="4xl" mb={4} textAlign="left" >
          3. Reserve equipment
          </Heading>
          <Text fontSize={20}>Make online equipment reservations and immediately see which items are available, reserved, checked out, or under maintenance. Life-changing, right?</Text>
      </Container>
      <Image src={'./Group-337.png'} alt="" h={400} mr={16}/>
      </Stack>
        
      </Box>
      <Box
        w="100vw"
        h="50vh"
        position="relative"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor={'brand.300'}
        
        zIndex={1}
      >
      <Stack position="relative" top={150} direction={{ base: 'column', md: 'row' }} >
      
      <Image src={'./visual-square-12_2022-07-26-091100_odzy.png'} alt="" h={400} ml={16}/>
      <Container maxW="container.sm" pt={16} zIndex={2} position="relative"  color="brand.200">
          
          <Heading as="h1" size="4xl" mb={4} textAlign="left" >
          4. Check-out equipment
          </Heading>
          <Text fontSize={20}>Check-in and check-out equipment faster. Prepare check-outs in advance and make sure the right equipment goes with the right person at the right time. Use check-out agreements and online signatures to increase accountability.</Text>
      </Container>
      </Stack>
        
      </Box>
      <Box
        w="100vw"
        h="50vh"
        position="relative"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor={'brand.300'}
        
        zIndex={1}
      >
      <Stack position="relative" top={150} direction={{ base: 'column', md: 'row' }}>
      <Container maxW="container.sm" pt={16} zIndex={2} position="relative"  color="brand.200">
          
          <Heading as="h1" size="4xl" mb={4} textAlign="left" >
          5. Manage everything from the app
          </Heading>
          <Text fontSize={20}>Use Cheqroom’s app to book equipment, sign agreements, flag issues, or run inventory checks faster. Scan barcodes with your phone to speed up your job.</Text>
      </Container>
      <Image src={'./Group-337.png'} alt="" h={400} mr={16}/>
      </Stack>
        
      </Box>
      <Box
        w="100vw"
        h="50vh"
        position="relative"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor={'brand.300'}
        
        zIndex={1}
      >
      <Stack position="relative" top={150} direction={{ base: 'column', md: 'row' }} >
      
      <Image src={'./visual-square-12_2022-07-26-091100_odzy.png'} alt="" h={400} ml={16}/>
      <Container maxW="container.sm" pt={16} zIndex={2} position="relative"  color="brand.200">
          
          <Heading as="h1" size="4xl" mb={4} textAlign="left" >
          Bonus: Generate reports
          </Heading>
          <Text fontSize={20}>Understand the usage patterns of your equipment, make informed decisions on what to buy next, and improve your crew’s productivity. Cheqroom stores your equipment data and transforms it into actionable insights, so you can stop guessing.</Text>
      </Container>
      </Stack>
        
      </Box>
      <Box
        w="100vw"
        
        position="relative"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor={'brand.300'}
        
        zIndex={1}
      >

        <Heading as="h1" size="4xl" mb={16} ml={16} textAlign="left" maxW={"container.sm"}>
        Frequently Asked Questions
        </Heading>
        <Center>
        <Accordion defaultIndex={[0]} allowToggle w={"50vw"} maxW="container.lg">
          <AccordionItem borderTop={"none"}>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left' paddingBottom={6} fontSize={24} fontWeight={700}>
                How long does it take to get started?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            It depends on the size of your inventory. The roll-out process varies from one week up to three months.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'  paddingBottom={6} fontSize={24} fontWeight={700}>
                How secure is Armoury?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Armoury is very secure. Read more on our security and commitment on our Privacy and Security page.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem borderBottom={"none"}>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'  paddingBottom={6} fontSize={24} fontWeight={700}>
                What features are available in the mobile app?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            In Armoury’s mobile app you can make reservations, pick equipment, run check-outs, sign agreements, add users, do spot checks (quickly scan the items in front of you), and simply scan items to get real-time information about their condition and the entire history of your equipment.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'  paddingBottom={6} fontSize={24} fontWeight={700}>
                How many users can I add?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            As many as you need. We offer unlimited users across all our plans. You can always decide how much access you will grant each user.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'  paddingBottom={6} fontSize={24} fontWeight={700}>
                What’s the difference between a reservation and a check-out?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Reservations are a way to book equipment in advance to ensure no other person takes it for the period you need it. A check-out is when you physically collect the gear and check it out of the gear cage.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'  paddingBottom={6} fontSize={24} fontWeight={700}>
                Do you offer support?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Yes, we do. We offer email support for all our plans. We also offer chat support for Plus plans. Premium plans have everything mentioned before plus a dedicated account manager.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left' paddingBottom={6} fontSize={24} fontWeight={700}>
                Why can’t I just use spreadsheets?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Excellent question. Armoury is a better way for your entire organization to manage equipment usage. It replaces spreadsheets or pen and paper with something faster, better organized, and more efficient. Our tool gives you full visibility of all your equipment, holds teams accountable, and provides insight into the usage & condition of all your items.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        </Center>
      </Box>
      </VStack>
    </Box>
    
  );
}

export default Home;
