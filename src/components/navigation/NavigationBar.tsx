import {
  Box,
  Text,
  HStack,
  useColorModeValue,
  Flex,
  Avatar,
  Button,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
  IconButton,
  VStack
} from '@chakra-ui/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { GiHamburgerMenu } from 'react-icons/gi';

type NavigationDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.RefObject<HTMLButtonElement>;
  navigationContent: NavigationContent;
  signedIn: boolean;
  onSignOut: () => void;
};

type NavigationContent = {
  signedIn: React.ReactNode[];
  signedOut: React.ReactNode[];
};

export const NavigationBar = () => {
  const auth = useAuth();
  const signedIn = auth.user !== null;
  const navigate = useNavigate();
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const navigationContent: NavigationContent = {
    signedIn: [
      <Avatar key={0} size="md" name={auth.user?.email ?? ''} />,
      <Text key={1}>{auth.user?.user_metadata['name'] ?? auth.user?.email ?? ''}</Text>
    ],
    signedOut: [
      <Button key={0} fontWeight={'bold'} onClick={() => navigate('/signin')}>
        Sign In
      </Button>
    ]
  };

  return (
    <Box as="section" pb={{ base: '5' }}>
      <NavigationDrawer
        signedIn={signedIn}
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
        navigationContent={navigationContent}
        onSignOut={auth.signOut}
      />
      <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Flex p={{ base: '4', lg: '5' }} justify="space-between">
          <HStack spacing="4">
            <Text fontWeight={'bold'}>Laundrivr</Text>
          </HStack>
          {isDesktop ? (
            <HStack spacing="4">
              {signedIn ? (
                <HStack spacing="4">
                  {navigationContent.signedIn.map((item, index) => (
                    <React.Fragment key={index}>{item}</React.Fragment>
                  ))}
                  <Button key={2} fontWeight={'bold'} onClick={auth.signOut}>
                    Sign Out
                  </Button>
                </HStack>
              ) : (
                <>
                  {navigationContent.signedOut.map((item, index) => (
                    <React.Fragment key={index}>{item}</React.Fragment>
                  ))}
                </>
              )}
            </HStack>
          ) : (
            <IconButton
              ref={btnRef}
              aria-label={'toggle-menu'}
              icon={<GiHamburgerMenu />}
              onClick={onOpen}
            />
          )}
        </Flex>
      </Box>
    </Box>
  );
};

const NavigationDrawer = ({
  isOpen,
  onClose,
  btnRef,
  navigationContent,
  signedIn,
  onSignOut
}: NavigationDrawerProps) => (
  <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />

      <DrawerBody>
        <VStack spacing={4}>
          {signedIn ? (
            <>
              <Text>Signed in as:</Text>
              {navigationContent.signedIn.map((item, index) => (
                <React.Fragment key={index}>{item}</React.Fragment>
              ))}
            </>
          ) : (
            <>
              <Text>You are not signed in.</Text>
              {navigationContent.signedOut.map((item, index) => (
                <React.Fragment key={index}>{item}</React.Fragment>
              ))}
            </>
          )}
        </VStack>
      </DrawerBody>

      <DrawerFooter>
        {signedIn && (
          <Button onClick={onSignOut} colorScheme="blue">
            Sign out
          </Button>
        )}
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);
