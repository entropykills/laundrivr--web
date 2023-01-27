import { Container, Stack, Heading, useBreakpointValue, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const FourOhFourPage = () => {
  const navigate = useNavigate();
  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing="6">
          {/* <Logo /> */}
          <VStack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={useBreakpointValue({ base: '3xl', md: '4xl' })} color="gray" mb={4}>
              404
            </Heading>
            <Button
              colorScheme={'blackAlpha'}
              onClick={() => {
                navigate('/');
              }}>
              Go Home
            </Button>
          </VStack>
        </Stack>
      </Stack>
    </Container>
  );
};
