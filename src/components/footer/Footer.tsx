import { ButtonGroup, Flex, IconButton, Stack, Text, Image } from '@chakra-ui/react';
import { FaGithub, FaHome } from 'react-icons/fa';

export const Footer = () => (
  <Flex
    direction="column"
    as="footer"
    role="contentinfo"
    p={{ base: '5', md: '8' }}
    backgroundColor="white">
    <Stack spacing={{ base: '4', md: '5' }}>
      <Stack justify="space-between" direction="row" align="center">
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Laundrivr. All rights reserved.
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://laundrivr.com"
            aria-label="Homepage"
            icon={<FaHome fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="https://github.com/laundrivr"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
    </Stack>
  </Flex>
);
