import React, { useEffect, useState } from 'react';
// react component 
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
// importing data display custome components 
import ServiceDisplay from '../DisplayService/ServiceDisplay';
import Greeting from '../Greeting/Greeting';
const Home = () => {
    // homedata variable
    const [homeData, sethomeData] = useState([])
    // getting home display data
    useEffect(() => {
        fetch('/homeData.JSON').then(res => res.json()).then(data => sethomeData(data))
    }, [])
    const history = useHistory();
    const handleClick = key => {
        history.push(`/service/${key}`)
    }
    return (
        <>
            <Greeting></Greeting>
            <Container className='my-5'>
                {/* display data in serviceDisplay */}
                <Row xs={1} md={2} className="g-4">
                    {homeData.map(services => <ServiceDisplay click={handleClick} key={services.key} data={services}></ServiceDisplay>)}

                </Row>
            </Container>
        </>);
};

export default Home;