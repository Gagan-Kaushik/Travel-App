import React,{ReactElement} from 'react';
import { Box, VStack, Text, Icon, Button } from '@chakra-ui/react';
import { FiHome, FiHeart, FiMessageCircle, FiSettings, FiInbox, FiLogOut, FiCreditCard } from 'react-icons/fi';
import { MdDiscount } from 'react-icons/md';
import { Image } from '@chakra-ui/react';

import { IconType } from 'react-icons';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';



const Sidebar = ():ReactElement => {
  return (
    <Box
      w={{ base: 'full', md: '250px' }}
      h="100vh"
      bgGradient="linear(to-b, #1e1e2f, #0d0d14)"
      color="white"
      p={4}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>

        <Text fontSize="2xl" fontWeight="bold" mb={10}>
          <Box as="span" color="green.300">Fox</Box>Travels
        </Text>

        <VStack spacing={4} align="stretch">
          <Link as={RouterLink} to="/">
            <SidebarItem icon={FiHome} label="Dashboard" active />
          </Link>

          <Link as={RouterLink} to="/tickets">
            <SidebarItem icon={FiInbox} label="My Tickets" active />
          </Link>

          <Link as={RouterLink} to="/favourite">
            <SidebarItem icon={FiHeart} label="Favourite" active />
          </Link>

          <Link as={RouterLink} to="/msg">
            <SidebarItem icon={FiMessageCircle} label="Message" active />
          </Link>

          <Link as={RouterLink} to="/pay">
            <SidebarItem icon={FiCreditCard} label="Transaction" active />
          </Link>

          <Link as={RouterLink} to="/hehe">
            <SidebarItem icon={FiSettings} label="Settings" active />
          </Link>
        </VStack>


        <Box
          mt={10}
          bg="green.100"
          p={4}
          borderRadius="xl"
          color="black"
        >
          <Text fontWeight="bold">50% Discount!</Text>
          <Text fontSize="sm">Get a discount on certain days and don't miss it.</Text>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between">
            <Button mt={3} size="sm" colorScheme="green" rightIcon={<MdDiscount />}>
              Grab it
            </Button>
            <Image src="/image/image 126.png" />
          </Box>
        </Box>
      </Box>


      <Button leftIcon={<FiLogOut />} variant="ghost" colorScheme="red" mt={8}>
        Logout
      </Button>
    </Box>
  );
};
type SidebarItemProps = {
  icon: IconType;
  label: string;
  active: boolean;
};

const SidebarItem = ({ icon, label, active }: SidebarItemProps) => (
  <Button
    leftIcon={<Icon as={icon} boxSize={5} />}
    colorScheme={active ? 'green' : 'whiteAlpha'}
    variant={active ? 'solid' : 'ghost'}
    justifyContent="start"
    w="full" _hover={{ textDecoration: 'underline', color: 'teal.600' }}
  >
    {label}
  </Button>
);
export default Sidebar;
