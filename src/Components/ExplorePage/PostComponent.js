import { Container, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PostService from '../../API/PostService';

const PostComponent = (post) => {
  
  return (
    <Paper sx={{p: '6vh', mt: 4, justifyContent: "center", textAlign: "center" }} elevation={3}>
        <Typography variant="body2">{post.post.plan.hotel}</Typography>
    </Paper>
  );
};

export default PostComponent;
