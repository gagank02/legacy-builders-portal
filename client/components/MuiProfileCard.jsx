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
import axios from 'axios';
import { useState } from 'react';

const API_URL = 'http://localhost:3001'


export default function MuiProfileCard({ firstName, lastName, userName, email, location, courses, id }) {
  const [loc, setLoc] = useState(location);
  const [Rloc, setRLoc] = useState("");
  
  function updateLocation(locc) {
    const data = {
      userID: id,
      location: locc,
      // token: localStorage.getItem('token')
    }

    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }

    axios.post(`${API_URL}/contents/location`, config, data)
      .then(function (res) {
        console.log(res);
        setRLoc(res.data.location);
      })
      .catch(function (err) {
        console.log(err)
      });
  }

  return (
    <Card sx={{ width: "65vw", height: "31.5vh"}}>
    <CardContent>
        <h2>{firstName} {lastName}</h2>
        <p style={{ paddingLeft: "5vw" }}>Profile Information:</p>
        {/* <MuiInformationTable userName={userName} email = {email} location = {location} /> */}

        <div style={{ position: "absolute", float: "left", paddingLeft: "5vw" }}>
          <ul style={{}}>
            <p> <img src="assets/Username.png" width="10 px" />
              &nbsp;Username:</p>
            <p>   <img src="assets/Mail.png" width="13px" />
              &nbsp; Email: </p>
            <p> <img src="assets/Location.png" width="10px" />
              &nbsp; Location:</p>
          </ul>
        </div>
        <div style={{ float: "right", paddingRight: "10vw" }}>

          <ul style={{}}>
            <p>{userName}</p>
            <p>{email} </p>
            <p>{loc}</p>
          </ul>
        </div>
      </CardContent>
      <br></br><br></br><br></br><br></br><br></br>
      <CardActions>
        <form style={{paddingLeft: "50px", display: "flex", "justifyContent": "center"}}>
          <input className='textField' type="text" placeholder="Update your location" value={loc} onChange={(e) => setLoc(e.target.value)}></input>
          <div className='button'>
            <input type='button' value='Update' onClick={() => updateLocation(loc)}></input>
          </div>
        </form>
      </CardActions>
    </Card>
  );
}