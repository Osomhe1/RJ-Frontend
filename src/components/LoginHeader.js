import React from 'react'
import {Box, Flex, Spacer, Button} from '@chakra-ui/react'
import Logo from './Logo'
import { useNavigate } from 'react-router-dom';
// import { saveData } from './UserData';



export default function LoginHeader(props) {

  let navigate = useNavigate();

  const handleLogout =() => {
        // localStorage.removeItem(saveData);
        localStorage.clear();
        navigate('/');
    }

  return (
    <Box bg="#301446" color="#fff" pb={4} >
      <Flex p={4}>
        <Box>
          <Logo />
        </Box>
        <Spacer />
        <Box m={4} fontSize={20}>
          Hi ayo
        </Box>
      </Flex>
      <Box m={4}  p={10} >
        <Button float="right" bg="#EA7052" 
        onClick={handleLogout
          // navigate('/')
        }>
          Logout
        </Button>
      </Box>
    </Box>
  );
}
