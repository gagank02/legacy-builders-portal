import Navbar from '../components/Navbar'
import { AppBar, Box, Button, ClickAwayListener, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Avatar } from '@mui/material';
import MuiTable from '../components/MuiTable';
import MuiCard from '../components/MuiCard';
import MuiAvatar from '../components/MuiAvatar'
import MuiProfileTable from '../components/MuiProfileTable'
import MuiFriendsCard from '../components/MuiFriendsCard'

const Profile = () => {
    return ( 
        <>
            <Navbar />
            <div className="profile">
                
                <div className="parent">
                <h1 color = "rgb(40, 68, 146)"> Profile </h1>
                    <div className = "child">
                        <div className='avatar'>
                            <MuiAvatar sx={{}} first="First" last="Last"></MuiAvatar>
                        </div>
                    </div>
                    <div className = "child" >
                        <MuiProfileTable userName="firstlast123" email="first.last@gmail.com" location='Chicago, Illinois' ></MuiProfileTable>
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