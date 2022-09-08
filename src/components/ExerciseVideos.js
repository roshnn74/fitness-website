import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ marginTop: '10px' }} p="20px">
      <Typography variant="h4" mb="33px" fontFamily="Clarendon" textTransform='capitalize' >
        <strong>
          Watch <span style={{ color: '#0096FF'}}>{name}</span> exercise videos
        </strong>
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
        sx={{
          flexDirection: { lg: 'row' }, 
          gap: { lg: '30px', xs: '0' }
        }}
      >
          {exerciseVideos?.slice(0,6).map((item, index) => (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box>
                <Typography variant="h6" color="#6495ED" fontFamily="Clarendon">
                  {item.video.title}
                </Typography>
                <Typography variant="h7" color="#000" fontFamily="Clarendon">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos;