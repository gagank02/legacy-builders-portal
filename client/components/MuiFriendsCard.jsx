import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { blue } from '@mui/material/colors';


export default function BasicCard() {
  return (
    <Card sx={{ width: "30vw"}}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        
      </Typography>
      <Typography variant="h5" component="div">
          <h3>Friend List</h3>
        </Typography>
        <ul style={{ }}>
        
        <p> <img src = "assets/profile.webp" width = "20px" />
               Friend #1</p>
        <p> <img src = "assets/profile.webp" width = "20px" />
               Friend #2</p>
        <p> <img src = "assets/profile.webp" width = "20px" />
               Friend #3</p>
        <p> <img src = "assets/profile.webp" width = "20px" />
               Friend #4</p>
        </ul>
    </CardContent>
    <CardActions>
      <Button size="small"></Button>
    </CardActions>
  </Card>
  );
}