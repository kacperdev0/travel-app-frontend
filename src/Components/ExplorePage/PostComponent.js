import { Box, Toolbar, Avatar, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getPlaceById } from '../../Objects/GetPlaceById';
import PostService from '../../API/PostService';

const PostComponent = (post) => {

  useEffect(() => {

  }, [])
  
  return (
    <Paper sx={{p: '3vh', mt: 4, justifyContent: "center", textAlign: "center" }} elevation={3}>
        <Toolbar>
        <Box display="flex" alignItems="center">

          <Avatar alt="User Name" src="post.post.plan.user.avatarUrl" sx={{ width: 40, height: 40, marginRight: 2 }} />
          
          <Typography variant="h6" component="div" color="inherit">
            {post.post.plan.user.login}
          </Typography>
        </Box>
      </Toolbar>
        <Typography variant="body2">
          {post.post.plan.hotel}
        </Typography>
    </Paper>
  );
};

export default PostComponent;
