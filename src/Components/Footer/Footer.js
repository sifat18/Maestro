import React from 'react';
// importing react componets
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// custom css
import './Footer.css'
const Footer = () => {
    return (
        // footer header style
        <Row className='rong'>
            <h1 style={{
                color: "#12a4d9 ",
                textAlign: "center",
                marginTop: "30px",
                marginBottom: "30px"
            }}>
                Maestro of Culinary Arts
            </h1>
            {/* links segments container */}
            <Container className='foot-margin'>
                <Row>
                    {/* About segments */}
                    <Col>
                        <h4>About Us</h4>
                        <Link to="#"><p>Aim</p></Link>
                        <Link to="#"><p>Vision</p></Link>
                        <Link to="#"><p>Testimonials</p></Link>
                    </Col>
                    <Col>
                        {/* services */}
                        <h4>Services</h4>
                        <Link to="#"><p>Western Cooking Lessons</p></Link>
                        <Link to="#"><p>Korean Cooking Lessons</p></Link>
                        <Link to="#"><p>Indian Cooking Lessons</p></Link>
                        <Link to="#"><p>Mexican Cooking Lessons</p></Link>
                    </Col>
                    <Col>
                        {/* contact-us */}
                        <h4>Contact Us</h4>
                        <Link to="#"><p>UK</p></Link>
                        <Link to="#"><p>USA</p></Link>
                        <Link to="#"><p>KOREA</p></Link>
                        <Link to="#"><p>GERMANY</p></Link>
                    </Col>
                    <Col>
                        {/* social-media */}
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