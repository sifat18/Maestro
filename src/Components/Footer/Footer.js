import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <Row className='rong'>
            <h1 style={{
                color: "#12a4d9 ",
                textAlign: "center",
                marginTop: "30px",
                marginBottom: "30px"
            }}>
                Maestro of Culinary Arts
            </h1>
            <Container className='foot-margin'>
                <Row>
                    <Col>
                        <h4>About Us</h4>
                        <Link to="#"><p>Aim</p></Link>
                        <Link to="#"><p>Vision</p></Link>
                        <Link to="#"><p>Testimonials</p></Link>
                    </Col>
                    <Col>
                        <h4>Services</h4>
                        <Link to="#"><p>Writing</p></Link>
                        <Link to="#"><p>Internships</p></Link>
                        <Link to="#"><p>Coding</p></Link>
                        <Link to="#"><p>Teaching</p></Link>
                    </Col>
                    <Col>
                        <h4>Contact Us</h4>
                        <Link to="#"><p>Uttar Pradesh</p></Link>
                        <Link to="#"><p>Ahemdabad</p></Link>
                        <Link to="#"><p>Indore</p></Link>
                        <Link to="#"><p>Mumbai</p></Link>
                    </Col>
                    <Col>
                        <h4>Social Media</h4>
                        <Link to="#"><p>
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "5px" }}>
                                    Facebook
                                </span>
                            </i></p>
                        </Link>
                        <Link to="#"><p>
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "5px" }}>
                                    Instagram
                                </span>
                            </i></p>
                        </Link>
                        <Link to="#"><p>
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "5px" }}>
                                    Twitter
                                </span>
                            </i></p>
                        </Link>
                        <Link to="#"><p>
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "5px" }}>
                                    Youtube
                                </span>
                            </i></p>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Row>
    );
};

export default Footer;