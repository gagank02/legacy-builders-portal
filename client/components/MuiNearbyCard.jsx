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
        <>
      <Card sx={{ width: "30vw"}}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text" gutterBottom>
            <h1>Free resources nearby!</h1>
          </Typography>

          <Typography sx={{ fontSize: 12 }} color="text-secondary" gutterBottom>
            <h1>Wifi and access to computers:</h1>
          </Typography>

            <ul>
                <li>
                <Typography sx={{ fontSize: 17 }} color="text" gutterBottom>
                    <p>Harold Washington Library Center</p> 
                </Typography>
                </li>
                <li>
                <Typography sx={{ fontSize: 17 }} color="text" gutterBottom>
                    <p>Richard J. Daley Branch, Chicago Public Library</p>
                </Typography>
                </li>
                <li>
                <Typography sx={{ fontSize: 17 }} color="text" gutterBottom>
                    <p>Chicago Lawn Branch, Chicago Public Library</p>
                </Typography>
                </li>
            </ul>

          <Button sx={{textDecoration: "underline"}}>Directions</Button>
         
        </CardContent>
        <CardActions>
          <Button size="small"></Button>
        </CardActions>
      </Card>
      </>
    );
  }