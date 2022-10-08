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
        <Typography component="div" color="blue">
          <h1 style={{textAlign: "center", color: 'black'}}>{header}</h1>
          
        </Typography>
        <Typography sx={{textAlign: "center"}} color="text.secondary">
          {info}
        </Typography>
        <Typography variant="body2">
          <br/>
          <div style={{justifyContent: 'center', display: 'flex'}}>
          <MuiResumeProgress desc={desc} href="/webinar" />
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}
