import Navbar from '../components/Navbar'
import { AppBar, Box, Button, ClickAwayListener, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Avatar } from '@mui/material';
import MuiTable from '../components/MuiTable';
import MuiCard from '../components/MuiCard';
import MuiAvatar from '../components/MuiAvatar'

const Profile = () => {
    return ( 
        <>
            <Navbar />
            <div className="profile-header">
                <MuiAvatar></MuiAvatar>
                <MuiCard header="Profile Information"><p>hello</p></MuiCard>
            </div>
        </>
     );
}
 
export default Profile;