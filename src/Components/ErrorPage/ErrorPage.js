import React from 'react';
// react component
import { Container } from 'react-bootstrap';
const ErrorPage = () => {
    // setting error image
    const imgUrl = 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFnZSUyMG5vdCUyMGZvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    return (
        // display error img
        <Container className='d-flex justify-content-center align-items-center my-auto'>
            <div className='my-5'>
                <img src={imgUrl} alt="404" />
            </div>

        </Container>
    );
};

export default ErrorPage;