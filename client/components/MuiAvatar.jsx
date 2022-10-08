import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';


export default function BasicCard() {
  return (
    <Card sx={{ width: "20vw"}}>
      <CardContent>
        <Avatar>FL</Avatar>
        <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>
          Firstname Lastname
        </Typography>

      </CardContent>
    </Card>
  );
}
