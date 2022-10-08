import Navbar from '../components/Navbar'
import MuiSubmitButton from "../components/MuiSubmitButton";
import { useState } from "react";

const CommunityPost = () => {
    const [title, setTitle] = useState('');
    const [tag, setTag] = useState('');
    const [content, setContent] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const post = {title, tag, content};

        fetch('', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(post)
        }).then(() => {
            console.log("Created a post in the community");

        });
    }
    
    return ( 
        <>
        <div className='communityPost'>
          <Navbar></Navbar>
          <h1>Create a new post!</h1>
          <form>

            <div className="input-container">
                <label>Title: </label>
                <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <br></br>
            
            <label>Tag:</label>
            <select value={tag} onChange={(e) => setTag(e.target.value)}>
                    <option value="Finance">Finance</option>
                    <option value="Payment">Payment</option>
                    <option value="Traffic">Traffic</option>
            </select>

            <br></br>

            <label>Post content:</label>
                <textarea required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>

            </form>
        <div className = "submitButton">
            <MuiSubmitButton desc="Submit"/>
        </div>

        </div>
        </>
     );
}
 
export default CommunityPost;