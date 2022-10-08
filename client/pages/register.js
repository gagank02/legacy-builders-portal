import { useState } from "react";
import MuiSubmitButton from "../components/MuiSubmitButton";
import MuiSignin from "../components/MuiSignin";

const Register = () => {
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {userName, password};

        fetch('', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        }).then(() => {
            console.log("User signed in");

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
                        <input type="first name" name="pass" value={firstName} required onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <br></br>
                    <div className="input-container">
                        <label>Last Name: </label><br></br>
                        <input type="last name" name="pass" value={lastName} required onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <br></br>
                    <div className="input-container">
                        <label>Email: </label><br></br>
                        <input type="email" name="pass" value={email} required onChange={(e) => setPassword(e.target.value)}/>
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