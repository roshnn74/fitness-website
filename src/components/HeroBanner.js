import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.jfif';

const HeroBanner = () => {
  return (
    <Box sx={{ 
        mt: { lg: '212px', xs: '70px' }, 
        ml: { sm: '50px' }
     }} position="relative" p="20px">
      <Typography color="#0096FF" fontWeight="600" fontSize="26px" fontFamily="Clarendon">
        Blue Gym Fitness Club
      </Typography>
      <Typography 
        fontWeight={700} 
        sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" 
        mt="30px"
        fontFamily="Clarendon"
      >
        Wake Up, Grind <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3} fontFamily="Clarendon">
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{ backgroundColor: "#0096FF", padding: '10px' }}>Explore Exercises</Button>
      <Typography
        fontWeight={600}
        color="#0096FF"
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none' }
        }}
        fontSize="200px"
        fontFamily="Clarendon"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner