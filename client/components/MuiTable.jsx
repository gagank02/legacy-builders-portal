import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(lessonName, time) {
    return { lessonName, time };
  }
  
    const rows = [
      createData('Communications', "30 mins"),
      createData('Financial Literacy', "30 mins"),
      createData('Conflict Resolution', "1 hour"),
      createData('Emotional Intelligence', "30 mins"),
    ];


export default function MuiTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "55vw"}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h1>Lessons</h1></TableCell>
            <TableCell align="right"><h1>Time</h1></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.lessonName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.lessonName}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
