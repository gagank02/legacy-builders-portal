import Navbar from '../components/Navbar'
import MuiCard from '../components/MuiCard.jsx'
import Sidebar from '../components/Sidebar.js'
import MuiTableComments from '/components/MuiTableComments.jsx'
import MuiKnowledgeCheck from '/components/MuiKnowledgeCheck.jsx'

const Webinar = () => {
    return ( 
        <>
         <Navbar />
         <div className='webinar'>
            <MuiCard size = "75vw" img="/assets/video.png"/>
                <MuiCard header = "Managing Finances" info = "Download Materials" />

            <div className='knowledge'>
                <MuiKnowledgeCheck></MuiKnowledgeCheck>
            </div>

            <br></br>
            <MuiTableComments/>
         </div>

        </>
     );
} 
 
export default Webinar;