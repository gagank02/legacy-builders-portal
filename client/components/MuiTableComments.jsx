import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(comments) {
    return {comments};
  }
  
    const rows = [
      createData('Comment'),
      createData('Comment'),
      createData('Comment'),
      createData('Comment'),
    ];


export default function MuiTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{display: 'flex-right',
        justifyContent: 'right',
        alignItems: 'right',
        height: '100vh',
        top: '10px'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h1>Discussion</h1></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.comments}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.comments}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
