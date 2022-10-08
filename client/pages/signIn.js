import { useState } from "react";
import MuiSubmitButton from "../components/MuiSubmitButton";
import MuiSignin from "../components/MuiSignin";
import axios from 'axios';

const API_URL = 'http://localhost:3001'

const SignIn = () => {
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();


        const data = {userName: userName, password: password};
 
        // fetch('', {
        //     method: 'POST',
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(user)
        // }).then(() => {
        //     console.log("User signed in");

        // });

        axios.post(`${API_URL}/auth/log-in`, data)
            .then(function(res) {
                console.log(res);
            })
            .catch(function(err) {
                console.log(err)
            });

    }


    return ( 
        <>
        <div className="signOn">
            <h1>Welcome to Legacy Builder!</h1>
            <div className="image">
                <img src="/assets/raf_logo.png"></img>
            </div>
            <br></br>
            <p>Please sign in using your username and password below.</p>
        
        <div className="form">
                <form>
                    <div className="input-container">
                        <label>Username: </label>
                        <input type="text" name="uname" value={userName} required onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                    <br></br>
                    <div className="input-container">
                        <label>Password: </label>
                        <input type="password" name="pass" value={password} required onChange={(e) => setPassword(e.target.value)}/>
                    
                    </div>
                    <br></br>
                    </form>
                <div className = "submitButton">
                    <MuiSubmitButton desc="Submit" onClick={handleSubmit}/>
                </div>
            </div>
        </div>
        <center>
            <p>Don't have an account?</p> 
            <a href="/register">Create one here</a>
        </center>
        </>
     );
}
 
export default SignIn;