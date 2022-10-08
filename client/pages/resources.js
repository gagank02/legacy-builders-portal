import Navbar from '../components/Navbar'
import MuiResourceCard from '../components/MuiResourceCard';
import MuiNearbyCard from '../components/MuiNearbyCard';

const Resources = () => {
    const volunteers = [
        { firstName: 'Jane', lastName: 'Doe', location: 'Chicago, Illinois', description: "Jane is a volunteer from Chicago, Illinois who is an expert in financial planning. She is available to meet in person or online. Reach out at janedoe@gmail.com!" },
        { firstName: 'Tom', lastName: 'Smith', location: 'Naperville, Illinois', description: "Tom is an expert in project management and emotional intelligence. He is available to help on the weekends. He can be reached at tomsmith@gmail.com!" },
        { firstName: 'Benjamin', lastName: 'Chase', location: 'Evanston, Illinois', description: "Ben is a volunteer and considered very knowledgable in leadership and soft skills. He is available weeknights. Reach out at benchase@gmail.com!" },
        { firstName: 'John', lastName: 'Morgan', location: 'Chicago, Illinois', description: "John is a professional in financial literacy and conflict resolution. He is available anytime at jpmorgan@gmail.com!" },
    ]

    return (
        <>
            <Navbar></Navbar>
            <div className="resources">
                <div className="loc">
                    <div className='locContent'>
                        <h3>Results based on: <p> Chicago, Illinois</p></h3>
                    </div>
                </div>

                <br></br>
                <div className='cards'>
                    <div className='card1'>
                        <MuiResourceCard firstName={volunteers[0].firstName} lastName={volunteers[0].lastName} location={volunteers[0].location} description={volunteers[0].description}></MuiResourceCard>

                    </div>
                    <br></br>
                    <MuiResourceCard firstName={volunteers[1].firstName} lastName={volunteers[1].lastName} location={volunteers[1].location} description={volunteers[1].description}></MuiResourceCard>
                </div>

                <br></br>
                <div className='cards'>
                    <MuiResourceCard firstName={volunteers[2].firstName} lastName={volunteers[2].lastName} location={volunteers[2].location} description={volunteers[2].description}></MuiResourceCard>
                    <br></br>
                    <MuiResourceCard firstName={volunteers[3].firstName} lastName={volunteers[3].lastName} location={volunteers[3].location} description={volunteers[3].description}></MuiResourceCard>
                </div>

                <br></br>

                <div className='other-resources'>
                    <MuiNearbyCard></MuiNearbyCard>
                </div>

            </div>
        </>
    );
}

export default Resources;