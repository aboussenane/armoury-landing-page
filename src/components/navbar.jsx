'use client'

import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Heading
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box w="100vw" position="fixed" top={0} left={0} right={0} zIndex={1000} bg={'brand.300'} color={'brand.50'}>
      <Flex
        bg={'brand.300'}
        color={'brand.50'}
        minH={'100px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        
        w={'100%'}
        align={'center'}
        justify={'space-between'}
        >
       <Image src={'./Armoury-title.png'} alt="Armoury Logo" h={100} ml={2}/>
        <Heading as="h1" size="2xl" mb={4} textAlign="center" color="brand.100">    
            Armoury
        </Heading>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          
          <Flex display={{ base: 'none', md: 'flex' }} ml={10} m={'auto'}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          mr={2}
          direction={'row'}
          spacing={6}>
          
          <Button as={'a'} fontSize={'lg'} _hover={{color: 'brand.100' }}fontWeight={600} variant={'link'} href={'#'}>
            Sign In
          </Button>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'md'}
            fontWeight={500}
            color={'brand.300'}
            bg={'brand.200'}
            href={'#'}
            _hover={{
              bg: 'brand.100',
              color: 'brand.300',
            }}>
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = 'brand.50';
  const linkHoverColor = 'brand.100';
  const popoverContentBgColor = 'brand.300';

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'lg'}
                fontWeight={600}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ color: 'brand.100' }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'brand.100' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'brand.100'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
}

const MobileNav = () => {
  return (
    <Stack bg={'brand.300'} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={'brand.200'} _hover={ {color:'brand.100'}}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            color={'brand.200'}
            _hover={ {color:'brand.100'}}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href} _hover={ {color:'brand.100'}}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}

const NAV_ITEMS = [
  {
    label: 'How it works',
    href: '#',
  },
  {
    label: 'Industries',
    children: [
      {
        label: 'Media Production & Broadcasting',
        href: '#',
      },
      {
        label: 'Education',
        href: '#',
      },
      {
        label: 'Worship',
        href: '#',
      },
      {
        label: 'Gaming and software development',
        href: '#',
      },
      {
        label: 'Electronics and hardware',
        href: '#',
      },

    ],
  },
  {
    label: 'Features',
    children: [
      {
        label: 'Reservations & Checkouts',
        href: '#',
      },
      {
        label: 'Self-Service Portal',
        href: '#',
      },
      {
        label: 'Reports',
        href: '#',
      },
      {
        label: 'Inventory',
        href: '#',
      },
      {
        label: 'Mobile App',
        href: '#',
      },
      

    ],
  },
  {
    label: 'Pricing',
    href: '#',
  },
];
