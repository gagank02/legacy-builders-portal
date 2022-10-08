import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { Padding } from '@mui/icons-material';


export default function BasicCard({ first, last }) {
  return (
    <Card sx={{ width: "250px"}}>
      <CardContent>
        <Avatar sx={{ width: 205, height: 205, fontSize: 100 }}>{first[0]}{last[0]}</Avatar>
       

      </CardContent>
    </Card>
  );
}
