import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Tips.css';
const Tips = (props) => {
    // destructing data
    const { name, img, recipie, description } = props.data;
    return (
        // row in different segments
        <Row className='d-flex justify-content-center align-items-center rowColor w-100 py-4 my-3 mx-auto '>
            {/* img segment */}
            <Col className='p-3 '><img src={img} alt="" /></Col>
            {/* detail segment */}
            <Col className='text-center mx-auto'>
                <h2 className='mb-5 fs-1 fw-bold'>{name}</h2>
                <p className='mb-5 fs-4'>{description}</p>
                {/* display button if reciepe data available */}
                {recipie ?
                    <Link to={recipie}>
                        <Button variant='info' >For more details</Button></Link> : ''
                }
            </Col>
        </Row>
    );
};

export default Tips;