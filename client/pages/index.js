import Head from 'next/head'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar.js'
import MuiCard from '../components/MuiCard.jsx'
import MuiTable from '../components/MuiTable.jsx'



export default function Home() {
  return (
      <>
        <Navbar />
        <div className='home-content'>
          <h2>Content</h2>
        </div>
        <div className = 'parent'>
          <div className = 'child'>
            <MuiTable/>
          </div>
          <div className = 'child'>
            <MuiCard header = "Your Progress" percent = "70%" />
            <br></br>
            <MuiCard header = "Your Next Webinar" percent = "https://urllink.com" />
          </div>
        </div>
          
          
        <div> 
          <br></br>
          <Sidebar />
        </div>
      </>
  )
}
