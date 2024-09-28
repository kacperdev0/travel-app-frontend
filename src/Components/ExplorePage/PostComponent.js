import { Box, Toolbar, Avatar, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getPlaceById } from '../../Objects/GetPlaceById';
import LoadingComponent from '../LoadingComponent';

const PostComponent = (post) => {
  const [hotel, setHotel] = useState(null);
  const [airportArrival, setAirportArrival] = useState(null);
  const [airportDeparture, setAirportDeparture] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hotelData = await getPlaceById(post.post.plan.hotel);
        const airportArrivalData = await getPlaceById(post.post.plan.airportArrival);
        const airportDepartureData = await getPlaceById(post.post.plan.airportDeparture);
        setHotel(hotelData);
        setAirportArrival(airportArrivalData);
        setAirportDeparture(airportDepartureData);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [post.post.plan.hotel, post.post.plan.airportArrival, post.post.plan.airportDeparture]); 

  if (loading) {
    return (
      <LoadingComponent/>
    );
  }

  return (
    <Paper sx={{ p: '3vh', mt: 4, justifyContent: "center", textAlign: "center" }} elevation={3}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <Avatar alt={post.post.plan.user.username} src={post.post.plan.user.avatarUrl} sx={{ width: 40, height: 40, marginRight: 2 }} />
          <Typography variant="h6" component="div" color="inherit">
            {post.post.plan.user.username}
          </Typography>
        </Box>
      </Toolbar>
      <Typography variant="body2">
        {JSON.stringify(hotel)}
      </Typography>
    </Paper>
  );
};

export default PostComponent;
