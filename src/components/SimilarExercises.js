import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '10px', xs:'0' }}}>
      <Typography variant="h4" mb={5} fontFamily="Clarendon" textTransform="capitalize" sx={{ mt: '10px' }}>
        <strong>
          Related <span style={{ color: '#0096FF' }}>muscle group</span> exercises
        </strong>
      </Typography>
      <Stack direction="row" sx={{ p:'2', position: 'relative' }}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader /> }
      </Stack>
      <Typography variant="h4" mb={5} fontFamily="Clarendon" textTransform="capitalize" sx={{ mt: '40px' }}>
        <strong>
          Related <span style={{ color: '#0096FF' }}>equipment</span> exercises
        </strong>
      </Typography>
      <Stack direction="row" sx={{ p:'2', position: 'relative' }}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader /> }
      </Stack>
    </Box>
  )
}

export default SimilarExercises;