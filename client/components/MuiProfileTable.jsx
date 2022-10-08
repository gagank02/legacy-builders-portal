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
    <Card sx={{ width: "65vw"}}>
    <CardContent>
        <h3>First Last</h3>
          Profile Information
          {/* <p>Username:</p><p>{userName}</p> */}
          
          
        <ul style={{ }}>
            <li>Username: {userName}</li>
            <li>Email: {email}</li>
            <li>Location: {location}</li>
        </ul>
    </CardContent>
    <CardActions>
      <Button size="small">Edit</Button>
    </CardActions>
  </Card>
  );
}