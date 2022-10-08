import { useState } from "react";
import MuiSubmitButton from "../components/MuiSubmitButton";
import MuiSignin from "../components/MuiSignin";

const API_URL = 'http://localhost:3001'

const Register = () => {
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // const usdater = {userName, password};

        // fetch('', {
        //     method: 'POST',
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(user)
        // }).then(() => {
        //     console.log("User signed in");

        // });

        const data = {
            userName: userName,
            password: password,
            firstName: firstName,
            lastName: lastName,
            email: email,
        }

        axios.post(`${API_URL}/auth/sign-up`, data)
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
            <p>Please fill out the fields below.</p>
        
        <div className="form">
                <form>
                    <div className="input-container">
                        <label>Username: </label>
                        <input type="text" name="uname" value={userName} required onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <br></br>
                    <div className="input-container">
                        <label>Password: </label>
                        <input type="password" name="pass" value={password} required onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <br></br>
                    <div className="input-container">
                        <label>First Name: </label>
                        <input type="first name" name="pass" value={firstName} required onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <br></br>
                    <div className="input-container">
                        <label>Last Name: </label>
                        <input type="last name" name="pass" value={lastName} required onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <br></br>
                    <div className="input-container">
                        <label>Email: </label>
                        <input type="email" name="pass" value={email} required onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <br></br>
                    </form>
                <div className = "submitButton">
                    <MuiSubmitButton desc="Submit"/>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Register;