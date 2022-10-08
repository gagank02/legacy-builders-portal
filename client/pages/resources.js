import Navbar from '../components/Navbar'
import MuiResourceCard from '../components/MuiResourceCard';

const Resources = () => {
    const volunteers = [
        {firstName: 'Jane', lastName:'Doe', location:'Chicago, Illinois', description: "Jane is a volunteer from Chicago, Illinois who is an expert in financial planning. She is available to meet in person or online. Reach out at janedoe@gmail.com!"},
        {firstName: 'Tom', lastName:'Smith', location:'Naperville, Illinois', description: "Top is an expert in project management and emotional intelligence. He is available to help on the weekends. He can be reached at tomsmith@gmail.com!"}
    ]

    return ( 
        <>
        <Navbar></Navbar>
        <div className="resources">
            <h3>Results based on: <p> Chicago, Illinois</p></h3>
            <br></br>
            <div className='cards'>
                <MuiResourceCard firstName={volunteers[0].firstName} lastName={volunteers[0].lastName} location={volunteers[0].location} description={volunteers[0].description}></MuiResourceCard>
                <br></br>
                <MuiResourceCard firstName={volunteers[1].firstName} lastName={volunteers[1].lastName} location={volunteers[1].location} description={volunteers[1].description}></MuiResourceCard>
            </div>
            
            <br></br>

            <div className='cards'>
                <MuiResourceCard></MuiResourceCard>
                <br></br>
                <MuiResourceCard></MuiResourceCard>
            </div>

        </div>
        </>
     );
}
 
export default Resources;