import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceDisplay from '../DisplayService/ServiceDisplay';
import './services.css'
const Services = () => {
    const [services, setservices] = useState([])
    useEffect(() => {
        fetch('./service.JSON').then(res => res.json()).then(data => setservices(data))
    }, [])
    return (
        <Container className='my-5'>
            <Row xs={1} md={3} className="g-4">
                {services.map(service => <ServiceDisplay data={service}></ServiceDisplay>)}

            </Row>
        </Container>
    );
};

export default Services;