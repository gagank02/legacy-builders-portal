import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MuiButton from './MuiButton';

export default function MuiNearbyCard() {
    return (
      <Card sx={{ width: "45vw"}}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text" gutterBottom>
            <h1>Free resources nearby!</h1>
          </Typography>
          <Typography sx={{ fontSize: 17 }} color="text" gutterBottom>
            <h4>Location:</h4>
          </Typography>
          <Typography sx={{ fontSize: 17 }} color="text-secondary" gutterBottom>
            
          </Typography>
         
        </CardContent>
        <CardActions>
          <Button size="small"></Button>
        </CardActions>
      </Card>
    );
  }