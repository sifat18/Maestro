import React from 'react';
// importing react componets
import { Col, Container, Row } from 'react-bootstrap';
// custom css
import './About.css'
// setting picture url
import chef from '../../images/about1.png'
const About = () => {
    return (
        <Container fluid className='about'>
            {/* About us starter */}
            <Row className='row1'>
                <Col xs={12} md={6} className='fit'>
                    <img src={chef} alt="" className='img-fluid w-100 h-100' />
                </Col>
                <Col xs={12} md={6}><Row className=' mt-5 px-5 mx-5 pt-5  pink typing'>
                    <h2 className=' fs-1 px-3 mx-3 fw-bold'>In case you’re searching for</h2>
                    <h2 className='fs-1 px-4 mx-5  fw-bold'>Learning top notch cuisine </h2>
                    <h2 className='fs-1 px-2 mx-2  fw-bold'>'Maestro' is unquestionably </h2>
                    <h2 className='fs-1 px-5 mx-5  fw-bold'>the spots to go in!!.</h2>
                </Row>
                    <Row className='mt-3 pink ' data-aos="fade-up-left">
                        <p className='me-5 text-center fs-3'>The adaptable menu flaunts some imaginative food, for example, salt and pepper squid on a delicate, Thai-roused plate of mixed greens; harissa angle soup (with the harissa glue served in a little glass); lemon simmered chicken on dark pepper gnocchi; and a most heavenly cinnamon, fennel and ‘Friends Name’ frozen yogurt. The eatery utilizes neighborhood create for fish and venison dishes flourish.
                        </p></Row>
                </Col>

            </Row>
            {/* middle part  */}
            <Row className='d-flex justify-content-center align-items-center mission h-100 pt-3'>
                <Container className='box'>
                    <h2 className='text-center fs-3 fw-bolder yelow '>
                        Culinarians are required to have knowledge of food science, nutrition and diet and are responsible for preparing meals that are as pleasing to the eye as well as to the palate. After restaurants, their primary places of work include delicatessens and relatively large institutions such as hotels and hospitals.
                    </h2>
                </Container>
            </Row>
        </Container>
    );
};

export default About;