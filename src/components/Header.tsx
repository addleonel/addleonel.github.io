import * as React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// styles
import '../assets/styles/components/Header.scss';

const Header: React.FC = () => {
	return (
		<React.Fragment>
			<Navbar id="mainNav" collapseOnSelect expand="lg">
				<Container>
					<Link className="navbar-brand" to="/">
						A.D.Leonel
					</Link>
					<Navbar.Toggle
						className="navbar-toggler"
						aria-controls="responsive-navbar-nav"
					/>
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto" />
						<Nav>
							<Link className="nav-link" to="/">
								Home
							</Link>
							<Link className="nav-link" to="/posts">
								Posts
							</Link>
							{/* <Link className="nav-link" to="/about">About</Link> */}
							{/* <Link className="nav-link" to="/contact">Contact</Link> */}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</React.Fragment>
	);
};

export default Header;
