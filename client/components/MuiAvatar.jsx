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
    <Card sx={{ width: "260px"}}>
      <CardContent>
        <Avatar sx={{ width: 230, height: 230, fontSize: 100}}>{first.charAt(0)} {last.charAt(0)}</Avatar>
      </CardContent>
    </Card>
  );
}
