import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MuiButton from './MuiButton';
import MuiResumeProgress from './MuiResumeProgress';



export default function MuiDashboard({header, info, size, img, desc}) {
  return (
    <Card sx={{ width: size}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          
        </Typography>
        <Typography component="div" color="rgb(40, 68, 146)">
          <h2>{header}</h2>
          
        </Typography>
        <Typography sx={{}} color="text.secondary">
          {info}
        </Typography>
        <Typography variant="body2">
          <br/>
          <MuiResumeProgress desc={desc} href="/webinar" />
          
        </Typography>
      </CardContent>
    </Card>
  );
}
