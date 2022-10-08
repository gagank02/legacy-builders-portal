import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MuiButton from './MuiButton';



export default function MuiDashboard({header, info, size, img, desc}) {
  return (
    <Card sx={{ width: size}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          
        </Typography>
        <Typography variant="h5" component="div" color="rgb(40, 68, 146)">
          
          {header}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {info}
        </Typography>
        <Typography variant="body2">
          <br/>
          <MuiButton desc={desc} />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"></Button>
      </CardActions>
    </Card>
  );
}
