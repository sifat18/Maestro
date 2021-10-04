import React from 'react';
// custom css
import './ServiceDisplay.css'
// react components
import { Card, Col } from 'react-bootstrap';

const ServiceDisplay = (props) => {
    // destructuring
    const { category, duration, img, name, price, description } = props.data;
    return (
        <Col >
            <Card className='zoom'>
                {/* img */}
                <Card.Img variant="top" src={img} height='350' />
                {/* text details */}
                <Card.Body>
                    <Card.Title><h2 className='fs-2 fw-bold'>{name} Cooking Lesson's At Your Doorstep</h2></Card.Title>
                    <Card.Text><h4 className=''>Featured Catergory: {category}</h4></Card.Text>
                    <Card.Text>{description.slice(0, 100)}...</Card.Text>
                    <Card.Text><h3 className='fs-3 fw-bold'>Price: ${price}</h3></Card.Text>
                    <Card.Text><h5 className='fs-3 fw-bold'>Duration: {duration}</h5></Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServiceDisplay;