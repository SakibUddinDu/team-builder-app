import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/th_23.jpg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <div>
            <img className="image" src={logo} alt=""/>
            </div>
                <div>
                <Nav className="ml-5 ">
                <Nav.Link className="ml-3" href="#home">Home</Nav.Link>
                <Nav.Link className="ml-3"  href="#players">Players</Nav.Link>
                <Nav.Link className="ml-3"  href="#pricing">Pricing</Nav.Link>
                </Nav>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;