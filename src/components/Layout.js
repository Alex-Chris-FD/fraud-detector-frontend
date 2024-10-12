// src/components/Layout.js
import React from 'react';
import { Box, Container } from '@mui/material';
import Dashboard from './Dashboard';

function Layout() {
  return (
    <Box sx={{ height: '100vh' }}>
      <Container maxWidth="lg">
        <Dashboard />
      </Container>
    </Box>
  );
}

export default Layout;