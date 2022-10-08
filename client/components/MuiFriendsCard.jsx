import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { blue } from '@mui/material/colors';


export default function MuiFriendsCard() {
  return (
    <Card sx={{ width: "30vw", height: "35vh",}}>
    <CardContent>
      {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        
      </Typography> */}
      {/* <Typography variant="h5" component="div"> */}
          
          <h2>My Community</h2>
        {/* </Typography> */}
        <ul style={{ }}>
        
        <p> <img src = "assets/profile.webp" width = "20px"   />
        <gap></gap>
        &nbsp;  Friend #1</p> 

        <p> <img src = "assets/profile.webp" width = "20px" />
        &nbsp;  Friend #2</p>
        <p> <img src = "assets/profile.webp" width = "20px" />
        &nbsp;  Friend #3</p>
        <p> <img src = "assets/profile.webp" width = "20px" />
        &nbsp;    Friend #4</p>
        </ul>
    </CardContent>
    <CardActions>
      <Button size="small"></Button>
    </CardActions>
  </Card>
  );
}