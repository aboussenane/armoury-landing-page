import React from 'react';
import { 
  Box, 
  Accordion, 
  AccordionItem, 
  AccordionButton, 
  AccordionPanel, 
  AccordionIcon, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  Stack, 
  Image, 
  Center 
} from '@chakra-ui/react';

const Home = () => {
  return (
    <Box w="100vw" h="100%" position="relative" overflow="hidden" m={0} p={0} border={'solid'}>
      <VStack w="100%">
        <Box
          w="100%"
          h={{ base: 'auto', md: '100%' }}
          position="relative"
          top={{ base: '0', md: '50' }}
          left={0}
          right={0}
          bottom={0}
          backgroundImage="url('./Home-background.jpg')"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          padding={20}
          zIndex={1}
        >
          <Container maxW="container.lg" pt={16} zIndex={2} position="relative" color="brand.300">
            <Text fontWeight={700}>HOW IT WORKS</Text>
            <Heading as="h1" size="2xl" mb={4} textAlign="left">
              5 easy steps to take control over your inventory
            </Heading>
            <Text fontWeight={700}>From smooth reservations to easy check-outs</Text>
          </Container>
        </Box>

        {[
          {
            heading: '1. Import your inventory',
            text: 'Upload all your gear in one click. Easily add information such as brand, model, warranty dates, purchase price, etc. Armoury automatically adds the right picture.',
            image: './Group-345.png',
            reverse: false,
          },
          {
            heading: '2. Personalize your workflow',
            text: 'Multiple locations or gear cages? No problem. Personalize user access? We’ve got you. Configure Armoury to make it work for you.',
            image: './visual-square-12_2022-07-26-091100_odzy.png',
            reverse: true,
          },
          {
            heading: '3. Reserve equipment',
            text: 'Make online equipment reservations and immediately see which items are available, reserved, checked out, or under maintenance. Life-changing, right?',
            image: './Group-337.png',
            reverse: false,
          },
          {
            heading: '4. Check-out equipment',
            text: 'Check-in and check-out equipment faster. Prepare check-outs in advance and make sure the right equipment goes with the right person at the right time. Use check-out agreements and online signatures to increase accountability.',
            image: './visual-large-01-2_2023-08-08-091842_bido.png',
            reverse: true,
          },
          {
            heading: '5. Manage everything from the app',
            text: 'Use Armoury’s app to book equipment, sign agreements, flag issues, or run inventory checks faster. Scan barcodes with your phone to speed up your job.',
            image: './visual-square-02_2022-07-26-110252_qwdb.png',
            reverse: false,
          },
          {
            heading: 'Bonus: Generate reports',
            text: 'Understand the usage patterns of your equipment, make informed decisions on what to buy next, and improve your crew’s productivity. Armoury stores your equipment data and transforms it into actionable insights, so you can stop guessing.',
            image: './visual-square-18_2022-07-26-110330_jqql.png',
            reverse: true,
          },
        ].map((item, index) => (
          <Box
            key={index}
            w="100%"
            h="auto"
            position="relative"
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundColor={'brand.300'}
            zIndex={1}
            py={10}
          >
            <Stack 
              direction={{ base: 'column', md: item.reverse ? 'row-reverse' : 'row' }} 
              spacing={10} 
              alignItems="center"
              maxW="container.lg" 
              mx="auto" 
              px={5}
            >
              <Image src={item.image} alt="" h={{ base: '200px', md: '400px' }} />
              <Container maxW="container.md" color="brand.200">
                <Heading as="h1" size="2xl" mb={4} textAlign="left">
                  {item.heading}
                </Heading>
                <Text fontSize="lg">{item.text}</Text>
              </Container>
            </Stack>
          </Box>
        ))}

        <Box w="100%" backgroundColor={'brand.300'} py={10}>
          <Heading as="h1" size="2xl" mb={16} textAlign="left" maxW="container.sm" mx={5}>
            Frequently Asked Questions
          </Heading>
          <Center>
            <Accordion defaultIndex={[0]} allowToggle w="100%" maxW="container.lg">
              {[
                {
                  question: 'How long does it take to get started?',
                  answer: 'It depends on the size of your inventory. The roll-out process varies from one week up to three months.',
                },
                {
                  question: 'How secure is Armoury?',
                  answer: 'Armoury is very secure. Read more on our security and commitment on our Privacy and Security page.',
                },
                {
                  question: 'What features are available in the mobile app?',
                  answer: 'In Armoury’s mobile app you can make reservations, pick equipment, run check-outs, sign agreements, add users, do spot checks (quickly scan the items in front of you), and simply scan items to get real-time information about their condition and the entire history of your equipment.',
                },
                {
                  question: 'How many users can I add?',
                  answer: 'As many as you need. We offer unlimited users across all our plans. You can always decide how much access you will grant each user.',
                },
                {
                  question: 'What’s the difference between a reservation and a check-out?',
                  answer: 'Reservations are a way to book equipment in advance to ensure no other person takes it for the period you need it. A check-out is when you physically collect the gear and check it out of the gear cage.',
                },
                {
                  question: 'Do you offer support?',
                  answer: 'Yes, we do. We offer email support for all our plans. We also offer chat support for Plus plans. Premium plans have everything mentioned before plus a dedicated account manager.',
                },
                {
                  question: 'Why can’t I just use spreadsheets?',
                  answer: 'Excellent question. Armoury is a better way for your entire organization to manage equipment usage. It replaces spreadsheets or pen and paper with something faster, better organized, and more efficient. Our tool gives you full visibility of all your equipment, holds teams accountable, and provides insight into the usage & condition of all your items.',
                },
              ].map((item, index) => (
                <AccordionItem key={index}>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" paddingBottom={6} fontSize="xl" fontWeight={700}>
                        {item.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Center>
        </Box>
      </VStack>
    </Box>
  );
};

export default Home;
