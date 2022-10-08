import { NavigateBefore } from '@mui/icons-material';
import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState } from "react";
import MuiSubmitButton from "../components/MuiSubmitButton";

const handleSubmit = (e) => {

}

const CommunityPost = ({title}) => {
  //const [title, setTitle] = useState('');
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

  console.log(title);
  return ( 
      <>
      <div className='communityPost'>
        <h1>Create a new post!</h1>
        <form>

          <div className="input-container">
              <label>Title: </label>
              <input type="text" value={title} required />
          
          <br></br>
          
          <label>Tag:</label>
          <select value={tag} onChange={(e) => setTag(e.target.value)}>
                  <option value="Finance">Finance</option>
                  <option value="Payment">Payment</option>
                  <option value="Traffic">Traffic</option>
          </select>
          </div>

          <br></br>
          <br></br>

          <div className='bottom-container'>
          <label>Post content:</label>
              <textarea required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>

          </form>
      <div className = "submitButton">
          <MuiSubmitButton desc="Submit"/>
      </div>

      </div>
      </>
   );
}

const CommunityPostList = ({header, firstName, lastName, tag}) => {
  const tags = { 'Finance' : '/assets/dollar-sign.jpeg', 'Payment':'/assets/payment.jpeg', 'Traffic':'/assets/traffic.jpeg'}
  return ( 
      <>
      <div className='CommunityPost'>
        <div>
          <img className="image" src={tags[tag]}></img>
        </div>
        <div className='info'>
          <div className='header'>
            <h1>{header}</h1>
          </div>
          <div className='tag'>
            <h5>{tag}</h5>
          </div>
          <div className='bottom'>
            <h4>By: {firstName} {lastName}</h4>
            <h4>Comments</h4>
          </div>
        </div>
      </div>
      </>
   );
}

/*const CreateBar = ({header, firstName, lastName, setShowCreatePost}) => {
  return ( 
    <>
    <div className='CreateBar'>
      <form>
        <input className='textField' type="text" placeholder="Share what's on you mind..."></input>
        <div className='button'>
          <input type='submit' value='Create' onClick={() => setShowCreatePost(true)}></input>
        </div>
      </form>
    </div>
    </>
  );
}*/

export default function Community() {
  const [title, setTitle] = useState('');
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [posts, setPosts] = useState([
    {header:'Blockchain developers best practices on innovation chain', firstName:'Jane', lastName:'Doe', tag:'Finance'},
    {header:'OnePay - Online Payment Processing App', firstName:'Tom', lastName:'Smith', tag:'Payment'},
    {header:'The 4-step SEO framework that led to a 1000% increase in traffic', firstName:'John', lastName:'Morgan', tag:'Traffic'}
  ]
  );

  return (
      <>
      <div className="container">
        <Navbar></Navbar>
        <div className='CreateBar'>
          <form>
            <input className='textField' type="text" placeholder="Share what's on you mind..." value={title} onChange = {(e) => setTitle(e.target.value)}></input>
            <div className='button'>
              <input type='button' value='Create' onClick={() => setShowCreatePost(true)}></input>
            </div>
          </form>
        </div>

        <div>
          {showCreatePost && <br></br>}
          {showCreatePost && <CommunityPost title={title}></CommunityPost>}
        </div>

        <br></br>
        <CommunityPostList header={posts[0].header} firstName={posts[0].firstName} lastName={posts[0].lastName} tag={posts[0].tag}></CommunityPostList>
        <br></br>
        <CommunityPostList header={posts[1].header} firstName={posts[1].firstName} lastName={posts[1].lastName} tag={posts[1].tag}></CommunityPostList>
        <br></br>
        <CommunityPostList header={posts[2].header} firstName={posts[2].firstName} lastName={posts[2].lastName} tag={posts[2].tag}></CommunityPostList>

      </div>
      </>
  );
}