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
    <Card sx={{ width: "45vw"}}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        
      </Typography>
      <Typography variant="h5" component="div">
          Friend List
        </Typography>
        <ul style={{ }}>
            <li>Friend #1</li>
            <li>Friend #2</li>
            <li>Friend #3</li>
            <li>Friend #4</li>
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