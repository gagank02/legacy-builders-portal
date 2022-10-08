import Navbar from '../components/Navbar'
import { AppBar, Box, Button, ClickAwayListener, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Avatar } from '@mui/material';
import MuiTable from '../components/MuiTable';
import MuiCard from '../components/MuiCard';
import MuiAvatar from '../components/MuiAvatar'
import MuiProfileTable from '../components/MuiProfileCard'
import MuiFriendsCard from '../components/MuiFriendsCard'
import MuiProfileCard from '../components/MuiProfileCard';

const Profile = () => {
    return ( 
        <>
            <Navbar />
            <div className="profile">
                
                <div className="parent">
                    
                <h2> Profile </h2>
                    <div className = "child">
                        <div className='avatar'>
                            <MuiAvatar sx={{}} first="First" last="Last"></MuiAvatar>
                        </div>
                    </div>
                    <div className = "child" >
                        <MuiProfileCard userName="firstlast123" email="first.last@gmail.com" location='Chicago, Illinois' ></MuiProfileCard>
                    </div>
                </div>
                    
                <div className="parent">
                    <div className = "child">
                            <MuiFriendsCard></MuiFriendsCard>
                        </div>
                        <div className = "child">
                            <MuiTable></MuiTable>
                        </div>
                    </div>
                </div>
              
        </>
     );
}
 
export default Profile;