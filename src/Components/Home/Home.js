import React, { useEffect, useState } from 'react';
import Greeting from '../Greeting/Greeting';
import Services from '../Services/Services';
import './home.css'
const Home = () => {
    const [homeData, sethomeData] = useState([])
    useEffect(() => {
        fetch('').then(res => res.json()).then(data => sethomeData(data))
    }, [])
    return (
        <>
            <Greeting></Greeting>
            <Services></Services>
        </>);
};

export default Home;