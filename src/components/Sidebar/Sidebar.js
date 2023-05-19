import React, { useState } from 'react';
import { Navbar, Container, Button, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMortarPestle } from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.scss"
import { Link } from 'react-router-dom';



const Sidebar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    return (
        <>
            <Navbar expand="lg" variant="light" bg="light">
           
                <Container>
                    <Navbar.Brand href="/"> Delizie In Cucina 
                    </Navbar.Brand>
                    <Button className="sidebar-toggle" variant="outline-secondary" onClick={handleShow}>
                        <FontAwesomeIcon icon={faMortarPestle} />
                    </Button>
                </Container>

            </Navbar>


            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menù</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="nav flex-column">
                        <li className="nav-item">

                            <Link to="/" className="nav-link active" onClick={handleClose} >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/recipes" className="nav-link" onClick={handleClose}>Recipes</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/category" className="nav-link" onClick={handleClose}>Category</Link>
                        </li>


                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Sidebar