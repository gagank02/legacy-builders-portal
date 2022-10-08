import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { blue } from '@mui/material/colors';


export default function BasicCard({userName, email, location, courses}) {
  return (
    <Card sx={{ width: "45vw"}}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        
      </Typography>
      <Typography variant="h5" component="div">
          Profile Information
        </Typography>
        <ul style={{ }}>
            <li>Username: {userName}</li>
            <li>Email: {email}</li>
            <li>Location: {location}</li>
            <li>Courses: {courses}</li>
        </ul>
      <Typography variant="body2">
        
        <br />
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small"></Button>
    </CardActions>
  </Card>
  );
}