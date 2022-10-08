import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MuiButton from './MuiButton';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function MuiNextWebinar({ header, info, size, url }) {
  return (
    <Card sx={{
      width: size, ['@media (max-width: 420px)']: {
        width: "100%",
      },
    }}>

      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

        </Typography>
        <Typography variant="h5" component="div" color="rgb(40, 68, 146)">

          {header}
        </Typography>
        <Typography sx={{}} color="text.secondary">
          {info}
        </Typography>
        <Typography variant="body2">
          <a href={url}>{url}</a>

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"></Button>
      </CardActions>
    </Card>
  );
}
