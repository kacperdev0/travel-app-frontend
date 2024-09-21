import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PostService from '../../API/PostService';
import PostComponent from './PostComponent';

const ExplorePageComponent = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const data = await PostService.getAllPosts()
      setPosts(data)
    }

    fetch()
  }, [])

  useEffect(() => {
    console.log(posts)
  }, [posts])
  
  return (
    <Container>
      <Grid direction="column">
        <PostComponent/>
        <PostComponent/>
      </Grid>
    </Container>
  );
};

export default ExplorePageComponent;
