import Navbar from '../components/Navbar'
import { AppBar, Box, Button, ClickAwayListener, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Avatar } from '@mui/material';
import MuiTable from '../components/MuiTable';
import MuiCard from '../components/MuiCard';
import MuiAvatar from '../components/MuiAvatar'
import MuiProfileTable from '../components/MuiProfileTable'

const Profile = () => {
    return ( 
        <>
            <Navbar />
            <div className="profile-header">
                <MuiAvatar sx={{marginLeft: '100px'}} first="First" last="Last"></MuiAvatar>
                <br></br>
                <MuiProfileTable userName="Matthew1234" email="mwhyte3602@gmail.com" location='Chicago, Illinois' courses='Courses'></MuiProfileTable>
            </div>
        </>
     );
}
 
export default Profile;