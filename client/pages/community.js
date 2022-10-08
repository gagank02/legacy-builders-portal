import { NavigateBefore } from '@mui/icons-material';
import Head from 'next/head'
import Navbar from '../components/Navbar'


const handleSubmit = (e) => {

}

const CommunityPost = ({header, firstName, lastName, tag}) => {
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
            <h4 className='comments'>Comments</h4>
          </div>
        </div>
      </div>
      </>
   );
}

const CreateBar = ({header, firstName, lastName}) => {
  return ( 
    <>
    <div className='CreateBar'>
      <form>
        <input type="text" placeholder='Placeholder'></input>
        <div className='button'>
          <input type='submit'></input>
        </div>
      </form>
    </div>
    </>
  );
}

export default function Community() {

  return (
      <>
      <div>
        <Navbar></Navbar>
        <CreateBar></CreateBar>
        <br></br>
        <CommunityPost header='Blockchain developers best practices on innovation chain' firstName='first' lastName='last' tag='Finance'></CommunityPost>
        <br></br>
        <CommunityPost header='OnePay - Online Payment Processing App' firstName='another' lastName='name' tag='Payment'></CommunityPost>
        <br></br>
        <CommunityPost header='The 4-step SEO framework that led to a 1000% increase in traffic' firstName='something' lastName='else' tag='Traffic'></CommunityPost>
      </div>
      </>
  );
}