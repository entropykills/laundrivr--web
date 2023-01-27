import {
  Box,
  HStack,
  useColorModeValue,
  Flex,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  IconButton,
  VStack
} from '@chakra-ui/react';
import * as React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

type NavigationDrawerProps = {
  isOpen: boolean;
  btnRef: React.RefObject<HTMLButtonElement>;
  onClose: () => void;
  navigationContent: NavigationContent;
};

type NavigationContent = React.ReactNode[];

type DashboardNavigationBarProps = {
  navigationContent: NavigationContent;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

export const DashboardNavigationBar = (props: DashboardNavigationBarProps) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const { isOpen, onOpen, onClose } = props;
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Box as="section" backgroundColor={'white'}>
      <NavigationDrawer
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
        navigationContent={props.navigationContent}
      />
      <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Flex p={{ base: '4', lg: '5' }} justify="space-between">
          {isDesktop ? (
            <HStack spacing="4">
              <HStack spacing="4">
                {props.navigationContent.map((item, index) => (
                  <React.Fragment key={index}>{item}</React.Fragment>
                ))}
              </HStack>
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
  navigationContent
}: NavigationDrawerProps) => (
  <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />

      <DrawerBody>
        <VStack spacing={4}>
          {navigationContent.map((item, index) => (
            <React.Fragment key={index}>{item}</React.Fragment>
          ))}
        </VStack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);
