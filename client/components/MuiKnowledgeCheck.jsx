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
      <Card sx={{ width: "20vw"}}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text" gutterBottom>
            <h1>Knowledge check #1:</h1>
          </Typography>

          <Typography sx={{ fontSize: 10 }} color="text-secondary" gutterBottom>
            <h1>Which of the following is not a good reason to pick a bank or credit union:</h1>
          </Typography>

            <ul style={{listStyle: 'none'}}>
                <li>
                <Typography sx={{ fontSize: 17 }} color="text" gutterBottom>
                    <p>A.  No overdraft fees</p> 
                </Typography>
                </li>
                <li>
                <Typography sx={{ fontSize: 17 }} color="text" gutterBottom>
                    <p>B. No monthly fees</p>
                </Typography>
                </li>
                <li>
                <Typography sx={{ fontSize: 17 }} color="text" gutterBottom>
                    <p>C. High interest rates</p>
                </Typography>
                </li>
                <li>
                <Typography sx={{ fontSize: 17 }} color="text" gutterBottom>
                    <p>D. Good savings rates</p>
                </Typography>
                </li>
            </ul>

          <Button sx={{textDecoration: "underline", paddingLeft: 15}}>Submit</Button>
         
        </CardContent>
        <CardActions>
          <Button size="small"></Button>
        </CardActions>
      </Card>
      </>
    );
  }