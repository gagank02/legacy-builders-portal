import Head from 'next/head'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar.js'
import MuiCard from '../components/MuiCard.jsx'
import MuiTable from '../components/MuiTable.jsx'



export default function Home() {
  return (
      <>
        <Navbar />
        <div className = 'welcome'>
          <MuiCard header = "Welcome to Legacy Builders!" info = "Here is your dashboard." size = "87vw"/>
        </div>
        
        <div className = 'parent'>
          <div className = 'child'>
            <MuiTable/>
          </div>
          <div className = 'child'>
            <MuiCard header = "Your Progress" info = "70%" size = "30vw" />
            <br></br>
            <MuiCard header = "Your Next Webinar" info = "https://urllink.com" />
          </div>
        </div>
          
          
        <div> 
          <br></br>
          <Sidebar />
        </div>
      </>
  )
}
