import { useState } from "react";
import MuiSubmitButton from "../components/MuiSubmitButton";
import MuiSignin from "../components/MuiSignin";
import axios from 'axios';

const API_URL = 'http://localhost:3001'

const Register = () => {
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            userName: userName,
            password: password,
            firstName: firstName,
            lastName: lastName,
            email: email,
            location: location
        }

        axios.post(`${API_URL}/auth/sign-up`, data)
            .then(function(res) {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                window.location = '/'
            })
            .catch(function(err) {
                alert("This user already exists! Please click 'OK' to be redirected to the login page.")
                window.location = '/login'
                console.log(err)
            });
    }


    return ( 
        <>
        <div className="signOn">
            <h1>Welcome to the Legacy Builder Portal!</h1>
            <div className="image">
                <img src="/assets/raf_logo.png"></img>
            </div>
            <br></br>
            <p>Please fill out the fields below.</p>
        
        <div className="form">
                <form>
                    <div className="input-container">
                        <label>Username: </label><br></br>
                        <input type="text" name="uname" value={userName} required onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <br></br>
                    <div className="input-container">
                        <label>Password: </label><br></br>
                        <input type="password" name="pass" value={password} required onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <br></br>
                    <div className="input-container">
                        <label>First Name: </label><br></br>
                        <input type="first name" name="pass" value={firstName} required onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <br></br>
                    <div className="input-container">
                        <label>Last Name: </label><br></br>
                        <input type="last name" name="pass" value={lastName} required onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <br></br>
                    <div className="input-container">
                        <label>Email: </label><br></br>
                        <input type="email" name="pass" value={email} required onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <br></br>
                    <div className="input-container">
                        <label>Location: </label><br></br>
                        <input type="location" name="pass" value={location} required onChange={(e) => setLocation(e.target.value)}/>
                    </div>
                    <br></br>
                    </form>
                <div className = "submitButton">
                    <MuiSubmitButton desc="Submit" onClick={handleSubmit}/>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Register;