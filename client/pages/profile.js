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
                <div className='avatar'>
                    <MuiAvatar sx={{}} first="First" last="Last"></MuiAvatar>
                </div>
                <br></br>
                <div className='profile-info'>
                    <div>
                        <MuiProfileTable userName="Matthew1234" email="mwhyte3602@gmail.com" location='Chicago, Illinois' courses='Courses'></MuiProfileTable>
                    </div>
                    <div>
                        <MuiFriendsCard></MuiFriendsCard>
                    </div>
                </div>
                
            </div>
        </>
     );
}
 
export default Profile;