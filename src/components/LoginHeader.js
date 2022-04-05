import React from 'react'
import {Box, Flex, Spacer, Button} from '@chakra-ui/react'
import Logo from './Logo'
import { useNavigate } from 'react-router-dom';


export default function LoginHeader() {

  let navigate = useNavigate();
  return (
    <Box bg="#301446" color="#fff">
      <Flex p={4}>
        <Box>
          <Logo />
        </Box>
        <Spacer />
        <Box m={4} fontSize={20}>
          Hi $email
        </Box>
      </Flex>
      <Box m={4} p={10}>
        <Button float="right" bg="#EA7052" 
        onClick={() =>{
          navigate('/')
        }}>
          Logout
        </Button>
      </Box>
    </Box>
  );
}
