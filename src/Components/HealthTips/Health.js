import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Tips from '../Tips/Tips';
import './health.css'
const Health = () => {
    // setting state variable
    const [tips, settips] = useState([])
    //    loading tips data
    useEffect(() => {
        fetch('./tips.JSON').then(res => res.json()).then(data => settips(data))
    }, [])
    return (
        <Container fluid className='pt-3 backgroungImg'>
            {/* display data in Tips */}
            {tips.map(tip => <Tips key={tip.key} data={tip}></Tips>)}

        </Container>
    );
};

export default Health;