import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceDisplay from '../DisplayService/ServiceDisplay';
import Greeting from '../Greeting/Greeting';
import './home.css'
const Home = () => {
    const [homeData, sethomeData] = useState([])
    useEffect(() => {
        fetch('./homeData.JSON').then(res => res.json()).then(data => sethomeData(data))
    }, [])
    return (
        <>
            <Greeting></Greeting>
            <Container className='my-5'>
                <Row xs={1} md={2} className="g-4">
                    {homeData.map(services => <ServiceDisplay data={services}></ServiceDisplay>)}

                </Row>
            </Container>
        </>);
};

export default Home;