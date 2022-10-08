import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function MuiButton({desc}) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined">{desc}</Button>
    </Stack>
  );
}
