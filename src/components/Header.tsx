import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

// styles
import '../assets/styles/components/Header.scss';

const Header: React.FC = () => {
    return (
        <React.Fragment>
            <Navbar id="mainNav" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="navbar-brand" href="#home">A.D.Leonel</Navbar.Brand>
                    <Navbar.Toggle className="navbar-toggler" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" />
                        <Nav >
                            <Nav.Link className="nav-link" href="#deets">Home</Nav.Link>
                            <Nav.Link className="nav-link" href="#c">Posts</Nav.Link>
                            <Nav.Link className="nav-link" href="#asdcs">About</Nav.Link>
                            <Nav.Link className="nav-link" href="#sd">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}


export default Header;