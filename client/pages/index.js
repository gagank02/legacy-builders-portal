import Head from 'next/head'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar.js'
import MuiCard from '../components/MuiCard.jsx'
import MuiTable from '../components/MuiTable.jsx'
import MuiButton from '../components/MuiButton'
import MuiDashboard from '../components/MuiDashboard'



export default function Home() {
  return (
      <>
        <Navbar />
        <div className = 'welcome'>
            <MuiDashboard header = "Welcome to Legacy Builders!" info = "Here is your dashboard." size = "87vw" desc= "Resume your Progress"> </MuiDashboard>
          
        </div>
        
        <div className = 'parent'>
          <div className = 'child'>
            <MuiTable/>
          </div>
          <div className = 'child'>
            <MuiCard header = "Your Progress" info = "70%" size = "30vw" img="/assets/progress bar.png"/>
            <br></br>
            <MuiCard header = "Your Next Webinar" info = "https://urllink.com" />
          </div>
        </div>
      </>
  )
}
