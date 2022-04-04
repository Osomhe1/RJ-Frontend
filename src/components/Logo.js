import React from 'react'
import {Box, Img} from '@chakra-ui/react'
import LogoR from './LogoR.png'

export default function Logo() {
  return (
    <Box bg="#301446">
      <Box display="flex">
        <Img src={LogoR} ml="10px" />

        <Box ml={10} color="#FFFFFF" fontSize="38px" as="p">
          Rodufy
        </Box>
      </Box>
    </Box>
  );
}
