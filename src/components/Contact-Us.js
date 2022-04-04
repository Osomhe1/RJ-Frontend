import React from 'react'
import {Box, Flex, Spacer, HStack} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaWhatsappSquare} from 'react-icons/fa'
import { FiMail } from 'react-icons/fi';

export default function ContactUs() {
  return (
    <Box bg="#F4F4F4;">
      <Flex p={10} >
        <Box m="auto" p={10}>
          <Box
            color="#000"
            fontWeight={700}
            fontSize={30}
            fontFamily="Chalkboard SE"
          >
            <h3>Contact Us</h3>
          </Box>

          <p
            color="#000000"
            fontFamily="Chalkboard SE"
            fontSize={20}
            fontWeight={300}
          >
            Got any questions, feedback, request and complains? Reach out...
          </p>

          <Box>
            <FontAwesomeIcon icon="fa-brands fa-whatsapp-square" />
          </Box>
          <Box>
          
            <HStack mt='20px'>
              <Box bgColor="#29A71A" h={50} w={50} color="#fff">
                <FaWhatsappSquare fontSize={50} />
              </Box>
              <Box color="#000" fontSize={25} fontWeight={400}>
                +2348232323892
              </Box>
            </HStack>
            <HStack mt='20px'>
              <Box bgColor="#707170" color="#fff" h={57} w={57}>
                <FiMail  fontSize={50}/>
              </Box>
              <Box color="#000" fontSize={25} fontWeight={400}>
                contact@uc.com
              </Box>
            </HStack>
          </Box>
        </Box>
        <Spacer />
        <Box></Box>
      </Flex>
    </Box>
  );
}
