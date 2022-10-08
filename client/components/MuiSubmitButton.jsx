import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function MuiSubmitButton({desc, onClick}) {
  return (
    
    <Stack float="center" width="30px">
      <Button variant="contained" >Submit</Button>
      <Button variant="contained" onClick={onClick}>Submit</Button>
      
    </Stack>
  );
}
