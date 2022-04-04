import React from 'react'
import { Box, FormControl, Input, Button, Img, Grid, GridItem } from '@chakra-ui/react';
import Line3 from './Line3.png'
import Line4 from './Line4.png'
import Line5 from './Line5.png'
import Logo from './Logo'

export default function Login() {
  return (
    <>
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={4}
        bg="#E5E5E5"
      >
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
                <Img  src={Line5} />
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
                maxW={600}
                borderRadius={40}
                m="auto"
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
                  Login
                </Box>
                <Box>
                  <FormControl isRequired mt={10} pb={10}>
                    <Box maxWidth={500} m="auto" mt={4}>
                      <Input
                        p={8}
                        bg="#F4F4F4"
                        color="#8C8C8C"
                        fontWeight={300}
                        fontSize={20}
                        id="email"
                        placeholder="Email"
                      />
                    </Box>
                    <Box maxWidth={500} m="auto" mt={4}>
                      <Input
                        p={8}
                        bg="#F4F4F4"
                        color="#8C8C8C"
                        fontWeight={300}
                        fontSize={20}
                        id="password"
                        placeholder="Password"
                      />
                    </Box>
                    <Box maxWidth={500} m="auto" mt={4}>
                      <Button
                        bg="#EA7052"
                        color="#fff"
                        fontWeight={700}
                        fontSize={20}
                        borderRadius="16px"
                        p={8}
                        width={200}
                      >
                        Login
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
