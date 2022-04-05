import React from 'react'
import FirstHero from './FirstHero'
import SecondHero from './SecondHero'
import ContactUs from './Contact-Us'
import Footer from './Footer'
import {Box} from '@chakra-ui/react'

export default function Dashboard() {
  return (
    <Box>
        <FirstHero />
        <SecondHero />
        <ContactUs />
        <Footer />
    </Box>
  )
}
