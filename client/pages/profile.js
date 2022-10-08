import Navbar from '../components/Navbar'
import { AppBar, Box, Button, ClickAwayListener, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Avatar } from '@mui/material';
import MuiTable from '../components/MuiTable';
import MuiCard from '../components/MuiCard';
import MuiAvatar from '../components/MuiAvatar'
import MuiProfileTable from '../components/MuiProfileCard'
import MuiFriendsCard from '../components/MuiFriendsCard'
import MuiProfileCard from '../components/MuiProfileCard';
import { useState, useEffect } from 'react'
import axios from 'axios';

const API_URL = 'http://localhost:3001'

const Profile = () => {
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }

        axios.get(`${API_URL}/auth/me`, config)
            .then(function (res) {
                console.log(res);
                let data = res.data.user;
                setId(data.id);
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setUserName(data.userName);
                setEmail(data.email);
                setLocation(data.location);
            })
            .catch(function (err) {
                console.log(err);
                window.location = '/login'
            });
    }, [])

    return (
        <>
            <div className="container">
                <Navbar />
                <div className="profile">

                    <div className="parent">

                        <h2> Profile </h2>
                        <div className="child">
                            <div className='avatar'>
                                <MuiAvatar sx={{}} first={firstName} last={lastName}></MuiAvatar>
                            </div>
                        </div>
                        <div className="child" >
                            <MuiProfileCard firstName={firstName} lastName={lastName} userName={userName} email={email} location={location} id={id} ></MuiProfileCard>
                        </div>
                    </div>
                    <div className="parent">
                        <div className="child">
                            <MuiFriendsCard></MuiFriendsCard>
                        </div>
                        <div className="child">
                            <MuiTable></MuiTable>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;