import React from 'react';
// react components 
import { Carousel, Col, Container, Row } from 'react-bootstrap';
// custom css
import './Greeting.css'
const Greeting = () => {
    return (
        <div>
            <Container fluid className='greeting'>
                {/* top banner text */}
                <Row>
                    <Col><div className='text-ceter mt-5 pt-5 slide-right'>
                        <h2 className='fs-1 fw-bold'>  We welcome you to sit back, unwind and appreciate the lovely sights and hints of the ocean while our best gourmet
                            expert sets you up a scrumptious dinner utilizing the best and freshest ingredients.</h2>
                    </div></Col>
                    <Col className=' ps-5'>
                        {/* carousel  */}
                        <Carousel className='Carousel'>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 CarouselImg"
                                    src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZWZ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                                    alt="First slide"

                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 CarouselImg"
                                    src="https://images.unsplash.com/photo-1577219492769-b63a779fac28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNoZWZ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 CarouselImg"
                                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGNoZWZ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Greeting;