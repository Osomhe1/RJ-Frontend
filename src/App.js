import React from 'react';
import {
  ChakraProvider,
  Box,
 
  theme,
} from '@chakra-ui/react';
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import ProductPage from './components/ProductPage'
import Error from './components/Error'
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
// import axios from 'axios';


// axios.default.baseURL = '/www.giropay.xyz/api/v1/giro-app';


function App() {
  
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Box
        // gn="center" fontSize="xl"
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/productpage" element={<ProductPage />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Box>
      </ChakraProvider>
    </Router>
  );
}

export default App;
