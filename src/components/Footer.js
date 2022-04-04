import React from 'react'
import { Box, Flex, Spacer } from '@chakra-ui/react';
import Logo from './Logo'

export default function Footer() {
  return (
    <Box bg="#301446" color="#fff" textAlign="center">
      <Box pt={5}>
        <Logo />
      </Box>

      <Flex m={10} p={5} >
        <Box>Blog</Box>
        <Spacer />
        <Box>Privacy Policy</Box>
        <Spacer />
        <Box>About</Box>
        <Spacer />
        <Box>Contact</Box>
      </Flex>

      <Box pb={6} >
        <small>copyright Rodufy 2022</small>
      </Box>
    </Box>
  );
}
