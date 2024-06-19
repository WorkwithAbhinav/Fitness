import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
     </Routes>
    <Footer />
  </Box>
);

export default App;