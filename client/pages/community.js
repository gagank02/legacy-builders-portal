import { NavigateBefore } from '@mui/icons-material';
import Head from 'next/head'
import Navbar from '../components/Navbar'


const CommunityPost = ({header, firstName, lastName}) => {
  return ( 
      <>
      <div className='CommunityPost'>
        <div>
          <img className="image" src="/assets/raf_logo.png"></img>
        </div>
        <div className='info'>
          <div className='header'>
            <h1>{header}</h1>
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

export default function Community() {
  return (
      <>
      <div>
        <Navbar></Navbar>
        <CommunityPost header='Blockchain developers best practices on innovation chain' firstName='first' lastName='last'></CommunityPost>
        <br></br>
        <CommunityPost header='OnePay - Online Payment Processing App' firstName='another' lastName='name'></CommunityPost>
        <br></br>
        <CommunityPost header='Blockchain developers best practices on innovation chain' firstName='something' lastName='else'></CommunityPost>
      </div>
      </>
  );
}