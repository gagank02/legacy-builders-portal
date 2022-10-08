import Navbar from '../components/Navbar'
import MuiCard from '../components/MuiCard.jsx'
import Sidebar from '../components/Sidebar.js'
import MuiTableComments from '/components/MuiTableComments.jsx'

const Webinar = () => {
    return ( 
        <>
         <Navbar />
         <MuiCard size = "75vw" img="/assets/video.png"/>
            <MuiCard header = "Managing Finances" info = "Download Materials" />


  
            <MuiTableComments/>
==
        </>
     );
} 
 
export default Webinar;