
import React from 'react';
import { Box, Img, Button, Spacer, Flex } from '@chakra-ui/react';
import FirstHeroImg from './FirstHeroImg.png';
import PlayStoreImg from './PlayStoreLogo.png'
import AppleLogo from './AppleLogo.png'
import Logo from './Logo'
// import { useHistory } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'


export default function FirstHero(props) {

  let navigate = useNavigate();

 

  // let history = useHistory();

  // const redirectLogin = () => {
  //   history.push('/Login');
  // };

  // const redirectRegister = () => {
  //   history.push('/Register');
  // };




  return (
    <Box bg="#301446" color="#fff" pb={3}>
      <Flex>
        <Box m={4}>
          <Logo />
        </Box>
        <Spacer />
        <Box m={4} ml={3}>
          <Button
            onClick={() => {
              navigate('/Register');
            }}
            m={3}
            bg="#EA7052"
            borderRadius="16px"
          >
            {/* <Link> */}
            Register
            {/* </Link> */}
          </Button>

          <Button
            onClick={() => {
              navigate('/Login');
            }}
            borderRadius="16px"
            bg="#301446"
          >
            Login
          </Button>
        </Box>
      </Flex>

      <Box
        d="flex"
        justifyContent="spacebetween"
        fontFamily="Chalkboard SE"
        maxWidth={1000}
        // m="auto"
        // justifyContent="center"
        alignItem="center"
        // m={10}
        m="auto"
      >
        <Box
          mt={4}
          w={350}
          alignItem="center"
          justifyContent="center"
          textAlign="center"
        >
          <Box fontSize="40px" fontWeight={700}>
            <h2>
              Our mission is to
              <Box as="span" color="#EA7052">
                advance
              </Box>
              humanity
            </h2>
          </Box>
          <Box mt={9} as="p" fontWeight={300} fontSize="20px">
            We would strive to achieve that through providing education and
            quality health
          </Box>

          <Flex mt={9}>
            <Box m={2} as="p">
              DOWNLOAD APP
            </Box>
            <Box w={100} m={2}>
              <Img src={PlayStoreImg} />
            </Box>
            <Box w={100} m={2}>
              <Img src={AppleLogo} />
            </Box>
          </Flex>
        </Box>

        <Spacer />
        <Box>
          <Box>
            <Img height="350px" src={FirstHeroImg} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
