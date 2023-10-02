import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
// import { createClient } from "@supabase/supabase-js"
// import { SessionContextProvider } from "@supabase/auth-helpers-react"
// const supabase = createClient(
//   "https://eyhsiynxxtidhqbnniuk.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5aHNpeW54eHRpZGhxYm5uaXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5OTcxNDksImV4cCI6MjAxMTU3MzE0OX0.CoEjDNeEn8hHVzKQEJNIU8FPsXqRlOLcNy46wRrbYWg"
// )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <SessionContextProvider supabaseClient={supabase}> */}
      <ChakraProvider>
        <App />
      </ChakraProvider>
    {/* </SessionContextProvider> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
