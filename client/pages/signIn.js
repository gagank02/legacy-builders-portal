import { useState } from "react";

const SignIn = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
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
        <div className="image">
            <img></img>
        </div>
        <div className="form">
            <form>
                <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" value={userName} required onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" value={password} required onChange={(e) => setPassword(e.target.value)}/>
                
                </div>
                <div className="button-container">
                <input type="submit" />
                </div>
            </form>
        </div>
        </>
     );
}
 
export default SignIn;