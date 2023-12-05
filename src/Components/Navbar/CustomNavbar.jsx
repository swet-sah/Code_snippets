import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'
import { BsSearch } from 'react-icons/bs'
const CustomNavbar = () => {


    return (
        <>

            <Navbar expand='lg' className=" mb-3 custom-navbar " >
                <Container fluid >
                    {/* Title or topic of the website */}
                    <div>
                        <Link to='/' className='project_title mylink fs-2'>Title</Link>
                    </div>

                    <div className=" input-group search-button w-50 tse">
                        <input type="text" className="form-control" placeholder="Search here..." aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <span className="input-group-text" id="basic-addon2" style={{ background: "" }}><BsSearch size={"24px"} /></span>
                        </div>
                    </div>
                    
                    <div>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />

                        <Navbar.Offcanvas
                            className='toggle-menu'
                            id={`offcanvasNavbar-expand-lg`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                            placement="end"
                        >
                            {/* closing button of the navbar while making it responsive */}
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`} className='mx-3'>
                                    Title
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className={`justify-content-end flex-grow-1 pe-3`}>
                                    <Link to='/home' className='mylink'>Home</Link>
                                    <Link to='/aboutus' className='mylink'>About Us</Link>
                                    <Link to='/events' className='mylink'>Events</Link>
                                    <Link to='/donate' className='mylink'>Donate</Link>
                                    <Link to='/statistics' className='mylink'>Statistics</Link>
                                    <Link to='/volunteer' className='mylink'>Volunteer</Link>
                                    {/* dropdown of the navbar */}
                                    <NavDropdown
                                        as={Link}
                                        title="Projects"
                                        id={`offcanvasNavbarDropdown-expand-lg`}
                                        className='mylink pt-0.5 dropdown'
                                    >
                                        {/* passing as = {Link} so that this work as link of router */}
                                        <NavDropdown.Item as={Link} to="/action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={Link} to="/action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Link to='/contactus' className='mylink'>Contact Us</Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </div>
                </Container>
            </Navbar>

        </>
    )
}

export default CustomNavbar
