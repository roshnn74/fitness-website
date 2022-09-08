import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.jpg';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#F0FFFF">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="Logo" width="100px" height="100px" />
        <Typography variant="h5" pb="40px" mt="20px" fontFamily="Clarendon">
          Made by Roshan Kuriakose Mohan
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer;