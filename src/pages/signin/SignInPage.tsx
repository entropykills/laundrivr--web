import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react';
import { useAuth } from '../../contexts/AuthContext';
import { OAuthButtonGroup } from './OAuthButtonGroup';
import { Navigate } from 'react-router-dom';

export const SignInPage = () => {
  const auth = useAuth();
  if (auth.user !== null) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing="6">
          {/* <Logo /> */}
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>
              Log in to your account
            </Heading>
          </Stack>
        </Stack>
        <Box
          py={{ base: '6', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'bg-surface', sm: 'white' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}>
          <Stack spacing="6">
            <Stack spacing="6">
              <Button variant="primary">Sign in</Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  Continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
