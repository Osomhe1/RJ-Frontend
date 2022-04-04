import React from 'react';
import {
  ChakraProvider,
  Box,
 
  theme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import Footer from './components/Footer';
// import LoginHeader from './components/LoginHeader';
import ContactUs from './components/Contact-Us';
import FirstHero from './components/FirstHero';
import SecondHero from './components/SecondHero';
// import Login from './components/Login'
// import Blog from './components/Blog'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        // gn="center" fontSize="xl"
      >
        {/* <LoginHeader /> */}
        <FirstHero />
        <SecondHero />
        <ContactUs />
        <Footer />

        {/* <Login /> */}
        {/* <Blog /> */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
