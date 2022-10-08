import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MuiButton from './MuiButton';


export default function MuiCard() {
  return (
    <Card sx={{}}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="black" gutterBottom>
          Blockchain developers best practices on innovation chain
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Finance, Crypto
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Firstname Lastname
        </Typography>
        
        
      </CardContent>
      <CardActions>
        <Button size="small"></Button>
      </CardActions>
    </Card>
  );
}