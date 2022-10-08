import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { blue } from '@mui/material/colors';
import MuiInformationTable from './MuiInformationTable';


export default function MuiProfileCard({userName, email, location, courses}) {
  return (
    <Card sx={{ width: "65vw", height: "32vh"}}>
    <CardContent>
        <h2>First Last</h2>
          <p style = {{paddingLeft: "5vw"}}>Profile Information:</p>
        {/* <MuiInformationTable userName={userName} email = {email} location = {location} /> */}
        
        <div style = {{position: "absolute", float: "left", paddingLeft: "5vw"}}>
        <ul style={{ }}>
        <p> <img src = "assets/Username.png"  width = "10 px"  />
        &nbsp;Username:</p>  
            <p>   <img src = "assets/Mail.png"width = "13px"  />         
            &nbsp; Email: </p>
              <p> <img src = "assets/Location.png"  width = "10px"  />
              &nbsp; Location:</p>
        </ul>
        </div>
        <div style = {{ float: "right", paddingRight: "10vw"}}>
   
        <ul style={{ }}>
          <p>{userName}</p>
          <p>{email} </p>
          <p>{location}</p>
        </ul>
        </div>
    </CardContent>
    <br></br><br></br><br></br><br></br><br></br>
    <CardActions>
      <Button size="small">Edit</Button>
    </CardActions>
  </Card>
  );
}