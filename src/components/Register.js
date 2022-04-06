import React, {useState} from 'react';
import {
  Box,
  FormControl,
  Input,
  Button,
  Img,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import Line3 from './Line3.png';
import Line4 from './Line4.png';
import Line5 from './Line5.png';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import axios from './axios'





 function Register(props) {

  let navigate = useNavigate();

  const url = 'auth/register';

  const [state, setState] = useState({
    email: '',
    password: '',
    successMessage: null,
  });

  const handleChange = (e) =>{
    const {id, value} = e.target
    setState(prevState =>({
      ...prevState, [id] : value
    }))
        console.log(id);

  }
  localStorage.setItem('email', state.email)
  localStorage.setItem('token', state.token)

  const session = {
    email: localStorage.getItem('email'),
    token: localStorage.getItem('token'),
  };

  const sendDetailsToServer = () => {
    if (state.email.length && state.password.length) {
      const payload = {
        email: state.email,
        password: state.password,
      };
      axios.post(url, payload)
        .then( (response)=> {
          if (response.status === 200) {
            setState(prevState => ({
              ...prevState,
              successMessage:
                'Registration successful. Redirecting to home page..',
            }));
            localStorage.setItem(session, response.data.token);
            navigate('/ProductPage');

          } else {
            props.showError('Some error ocurred');
          }
        })
        .catch( (err)=> {
          console.log(err);
        });
    } else {
      props.showError('Please enter valid email and password');
    }
  };




  const handleSubmit = e => {
    e.preventDefault();
    if(state.password){
      sendDetailsToServer()
    }
  };

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={4} bg="#E5E5E5">
        <GridItem colSpan={1} bg="#301446" h="100%">
          <Box mt={5}>
            <Box>
              <Logo />
            </Box>
            <Box mt={20}>
              <Box
              //  h={250}
              >
                <Img h={250} src={Line3} />
              </Box>
              <Box
              //  h={250}
              >
                <Img h={250} src={Line4} />
              </Box>
              <Box
              // h={250}
              >
                <Img src={Line5} />
              </Box>
            </Box>
          </Box>
        </GridItem>

        <GridItem colSpan={2}>
          <Box
            bg="#E5E5E5"
            //    h="100vh"
          >
            <Box pt={40}>
              <Box
                bg="#fff"
                width={{ base: 290, sm: 300, md: 600 }}
                borderRadius={40}
                m={{ base: 'auto', md: 30 }}
                // m="auto"
                pt={10}
                pb={10}
                textAlign="center"
              >
                <Box
                  as="h2"
                  fontWeight={700}
                  fontSize={35}
                  color="#000"
                  fontFamily="Chalkboard SE"
                  pt={10}
                >
                  Register
                </Box>
                <Box>
                  <FormControl isRequired mt={10} pb={10}>
                    <Box width={{ base: 290, md: 500 }} m="auto" mt={4}>
                      <Input
                        p={8}
                        bg="#F4F4F4"
                        color="#8C8C8C"
                        fontWeight={300}
                        fontSize={20}
                        id="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={state.email}
                      />
                    </Box>
                    <Box width={{ base: 290, md: 500 }} m="auto" mt={4}>
                      <Input
                        p={8}
                        bg="#F4F4F4"
                        color="#8C8C8C"
                        fontWeight={300}
                        fontSize={20}
                        id="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={state.password}
                        type="password"
                      />
                    </Box>
                    <Box width={{ base: 290, md: 500 }} m="auto" mt={4}>
                      <Button
                        bg="#EA7052"
                        color="#fff"
                        fontWeight={700}
                        fontSize={20}
                        borderRadius="16px"
                        p={8}
                        width={{ base: 290, md: 500 }}
                        onClick={handleSubmit}
                      >
                        Register
                      </Button>
                    </Box>
                  </FormControl>
                </Box>
              </Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}


export default  Register