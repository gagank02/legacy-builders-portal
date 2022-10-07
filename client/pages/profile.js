import Navbar from '../components/Navbar'
import { AppBar, Box, Button, ClickAwayListener, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Avatar } from '@mui/material';

const Profile = () => {
    return ( 
        <>
            <Navbar />
            <div className="profile-header">
                <Avatar>FL</Avatar>
                <p>Firstname Lastname</p>
            </div>
        </>
     );
}
 
export default Profile;