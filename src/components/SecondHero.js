import React from 'react'
import {Box, Img, Button, Spacer, Flex} from '@chakra-ui/react'
import SecondHeroImg from './SecondHeroImg.png'

export default function SecondHero() {
  return (
    <Box>
      <Flex
        fontFamily="Chalkboard SE"
        maxWidth={900}
        justifyContent="center"
        alignItem="center"
      
        m="auto"
        p={10}
      >
        <Box
          w={350}
          alignItem="center"
          justifyContent="center"
          textAlign="center"
        >
          <Box mt={10} color="#000" fontSize="40px" fontWeight={700}>
            <h2>
              Everything you’ll need to
              <Box as="span" color="#EA7052">
                excel
              </Box>
              in life
            </h2>
          </Box>
          <Box as="p" mt={5} color="#000" fontWeight={300} fontSize="20px">
            We’ve curated a list of valuable resources to get you going in life,
            all for free!
          </Box>
          <Box mt={10} color="#fff">
            <Button w={350} h={70} bg="#EA7052">
              Get Started
            </Button>
          </Box>
        </Box>

        <Spacer />
        <Box>
          <Box>
            <Img src={SecondHeroImg} h={450} />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
