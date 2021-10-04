import React from 'react';
import chef from '../../images/chef-hat-clothing-logo-by-Vexels.svg'
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className='header'><NavLink to='/home'>
                <Navbar.Brand className='logo'><img
                    src={chef}
                    width="50"
                    height="60"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                /> Maestro of Culinary </Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/home"> <Nav.Link href='/home'>Home</Nav.Link></NavLink>
                        <NavLink to="/about"> <Nav.Link href='/about'>About</Nav.Link></NavLink>
                    </Nav>
                    <Nav>
                        <NavLink to="/service"><Nav.Link href='/service'>Services</Nav.Link></NavLink>
                        <NavLink to="/health"><Nav.Link href='/health'>Health Tips</Nav.Link></NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;