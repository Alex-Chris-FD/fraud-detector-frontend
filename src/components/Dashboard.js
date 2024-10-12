// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <Grid container spacing={2}>
      {data.map(post => (
        <Grid item key={post.id} xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h6">{post.title}</Typography>
          <Typography variant="body1">{post.body}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default Dashboard;