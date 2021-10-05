import React, { useEffect, useState } from 'react';
// react components 
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
// custom display component
import ServiceDisplay from '../DisplayService/ServiceDisplay';
const Services = () => {
    // services data variable
    const [services, setservices] = useState([])
    //    loading data
    useEffect(() => {
        fetch('./service.JSON').then(res => res.json()).then(data => setservices(data))
    }, [])
    const history = useHistory();
    const handleClick = key => {
        history.push(`/service/${key}`)
    }
    return (
        <Container className='my-5'>
            <Row xs={1} md={3} className="g-4">
                {/* display in service display */}
                {services.map(service => <ServiceDisplay click={handleClick} key={service.key} data={service}></ServiceDisplay>)}

            </Row>
        </Container>
    );
};

export default Services;