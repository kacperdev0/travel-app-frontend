import { Container, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PostService from '../../API/PostService';

const ExplorePageComponent = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const data = await PostService.getAllPosts()
      setPosts(data)
    }

    fetch()

    console.log(posts)
  }, [])
  
  return (
    <Container>
      <Paper sx={{p: '6vh', mt: 4, justifyContent: "center", textAlign: "center" }} elevation="3">
        Explore page
      </Paper>
    </Container>
  );
};

export default ExplorePageComponent;
