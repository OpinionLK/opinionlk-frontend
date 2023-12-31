import React, { } from 'react';
import * as ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './context/AuthContext';
import theme from './theme';
import router from './routes/mainroutes';
import {
  RouterProvider,} from 'react-router-dom';
import {
  ChakraProvider,} from '@chakra-ui/react'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  // <StrictMode>
  
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
       <RouterProvider router={router} />
      </ChakraProvider>
    </AuthContextProvider>
  // {/* </StrictMode> */}
);

