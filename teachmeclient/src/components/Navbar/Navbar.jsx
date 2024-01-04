/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavbar = () => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/" style={{ color: 'purple', fontWeight: 'bold' }}>
                Teach - Me
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Link as={Link} to="/" className="nav-link"> Home</Nav.Link>
                    <Nav.Link as={Link} to="/orelDamti" className="nav-link"> Orel Damti </Nav.Link>
                    <Nav.Link as={Link} to="/Teacher" className="nav-link">Teachers </Nav.Link>
                    <Nav.Link as={Link} to="/AddProfile" className="nav-link">Add Profile</Nav.Link>
                    <Nav.Link as={Link} to="/Login" className="nav-link">Login</Nav.Link>
                    <NavDropdown title="AddProfile" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/TeacherProfile">Teacher-Profile</NavDropdown.Item>
                        <NavDropdown.Item href="/PupilProfile">Pupil-Profile</NavDropdown.Item>
                    </NavDropdown>
                    {/* ... other links */}
                </Nav>
                {/* ... search bar and other components */}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
