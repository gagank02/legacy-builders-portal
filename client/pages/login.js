import { useState } from "react";
import MuiSubmitButton from "../components/MuiSubmitButton";
import MuiSignin from "../components/MuiSignin";
import axios from 'axios';

const API_URL = 'http://localhost:3001'

const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            userName: userName,
            password: password
        };

        axios.post(`${API_URL}/auth/log-in`, data)
            .then(function (res) {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                window.location = '/'
            })
            .catch(function (err) {
                alert("Username or password was incorrect. Try again.")
                setUserName('')
                setPassword('')
                console.log(err)
            });

    }


    return (
        <>
            <div className="containerLogin">
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
                                <input type="text" name="uname" value={userName} required onChange={(e) => setUserName(e.target.value)} />
                            </div>
                            <br></br>
                            <div className="input-container">
                                <label>Password: </label>
                                <input type="password" name="pass" value={password} required onChange={(e) => setPassword(e.target.value)} />

                            </div>
                            <br></br>
                        </form>
                        <div className="submitButton">
                            <MuiSubmitButton desc="Submit" onClick={handleSubmit} />
                        </div>
                    </div>
                </div>
                <center>
                    <p>Don't have an account?</p>
                    <a href="/register">Create one here</a>
                </center>
            </div>
        </>
    );
}

export default Login;