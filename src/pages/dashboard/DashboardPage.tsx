import { Button, Flex, useDisclosure } from '@chakra-ui/react';
import { DashboardNavigationBar } from '../../components/dashboard/DashbordNavigationBar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const generateKey = () => {
  return Math.floor(Math.random() * 1000000);
};

export const DashboardPage = () => {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();

  const { isOpen: isSidebarOpen, onOpen: onSidebarOpen, onClose: onSidebarClose } = useDisclosure();

  const navigationContent = [
    <Button
      key={generateKey()}
      onClick={() => navigate('/dashboard')}
      colorScheme="gray"
      variant="outline">
      Default
    </Button>,
    <Button
      key={generateKey()}
      colorScheme="gray"
      variant="outline"
      isDisabled={!isAdmin}
      onClick={() => {
        navigate('/dashboard/admin');
      }}>
      Sales Dashboard
    </Button>,
    <Button
      key={generateKey()}
      colorScheme="gray"
      variant="outline"
      isDisabled={!isAdmin}
      onClick={() => {
        navigate('/dashboard/admin');
      }}>
      User Management
    </Button>,
    <Button
      key={generateKey()}
      colorScheme="gray"
      variant="outline"
      isDisabled={!isAdmin}
      onClick={() => {
        navigate('/dashboard/admin');
      }}>
      Pricing Settings
    </Button>,
    <Button
      key={generateKey()}
      colorScheme="gray"
      variant="outline"
      isDisabled={!isAdmin}
      onClick={() => {
        navigate('/dashboard/admin');
      }}>
      Announcements Management
    </Button>
  ];

  return (
    <Flex
      direction="column"
      h="full"
      w="full"
      p={{ base: '4', md: '6' }}
      gap={{ base: '4', md: '6' }}>
      <DashboardNavigationBar
        navigationContent={navigationContent}
        isOpen={isSidebarOpen}
        onOpen={onSidebarOpen}
        onClose={onSidebarClose}
      />
      <Outlet />
    </Flex>
  );
};
