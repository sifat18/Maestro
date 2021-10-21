import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';

const Details = () => {
    const { id } = useParams();

    // services data variable
    const [oneData, setoneData] = useState([])
    //    loading data
    useEffect(() => {
        fetch('../service.JSON').then(res => res.json()).then(data => setoneData(data))
    }, [])
    console.log(id);
    const displayData = oneData.find(info => info.key === id);
    console.log(displayData);
    return (
        <Container >
            <Row className='my-3'>
                <Col xs={12} md={6}>
                    <img src={displayData?.img} alt="" className="img-fluid" />
                </Col>
                <Col xs={12} md={6} className='my-4'>
                    <h2>{displayData?.name}</h2>
                    <p>{displayData?.description}</p>
                    <h4>Lesson-Duration- {displayData?.duration}</h4>
                    <h3 className='my-3'>Charge: <span className='fw-bold'> ${displayData?.price}</span></h3>
                    <Button variant='success'>Admit Today</Button>
                </Col>
            </Row>
        </Container >
    );
};

export default Details;