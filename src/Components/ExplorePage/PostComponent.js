import { Container, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PostService from '../../API/PostService';

const PostComponent = (plan) => {
  
  return (
    <Paper sx={{p: '6vh', mt: 4, justifyContent: "center", textAlign: "center" }} elevation={3}>
        Single Post
    </Paper>
  );
};

export default PostComponent;
