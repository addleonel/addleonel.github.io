import * as React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// styles
import '../assets/styles/components/Header.scss';

interface IButtons {
	[key: string]: boolean;
}

interface ButtonColors {
	[key: string]: { color: string; backgroundColor: string };
}

const Header: React.FC = () => {
	const [Buttons, setButtons] = React.useState<IButtons>({
		home: true,
		posts: false,
		about: false,
		contact: false,
	});

	const [selectedColors, setSelectedColor] = React.useState<ButtonColors>({
		home: { color: '#FFFFFF', backgroundColor: '#1355ca' },
		posts: { color: '#000000', backgroundColor: '#FFFFFF' },
		about: { color: '#000000', backgroundColor: '#FFFFFF' },
		contact: { color: '#000000', backgroundColor: '#FFFFFF' },
	});

	const handleSelected = (button: string) => {
		if (button === 'home') {
			setButtons({
				home: true,
				posts: false,
				about: false,
				contact: false,
			});
		} else if (button === 'posts') {
			setButtons({
				home: false,
				posts: true,
				about: false,
				contact: false,
			});
		} else if (button === 'about') {
			setButtons({
				home: false,
				posts: false,
				about: true,
				contact: false,
			});
		} else if (button === 'contact') {
			setButtons({
				home: false,
				posts: false,
				about: false,
				contact: true,
			});
		}
	};

	React.useEffect(() => {
		if (Buttons.home) {
			setSelectedColor({
				home: { color: '#FFFFFF', backgroundColor: '#1355ca' },
				posts: { color: '#000000', backgroundColor: '#FFFFFF' },
				about: { color: '#000000', backgroundColor: '#FFFFFF' },
				contact: { color: '#000000', backgroundColor: '#FFFFFF' },
			});
		} else if (Buttons.posts) {
			setSelectedColor({
				home: { color: '#000000', backgroundColor: '#FFFFFF' },
				posts: { color: '#FFFFFF', backgroundColor: '#1355ca' },
				about: { color: '#000000', backgroundColor: '#FFFFFF' },
				contact: { color: '#000000', backgroundColor: '#FFFFFF' },
			});
		} else if (Buttons.about) {
			setSelectedColor({
				home: { color: '#000000', backgroundColor: '#FFFFFF' },
				posts: { color: '#000000', backgroundColor: '#FFFFFF' },
				about: { color: '#FFFFFF', backgroundColor: '#1355ca' },
				contact: { color: '#000000', backgroundColor: '#FFFFFF' },
			});
		} else if (Buttons.contact) {
			setSelectedColor({
				home: { color: '#000000', backgroundColor: '#FFFFFF' },
				posts: { color: '#000000', backgroundColor: '#FFFFFF' },
				about: { color: '#000000', backgroundColor: '#FFFFFF' },
				contact: { color: '#FFFFFF', backgroundColor: '#1355ca' },
			});
		}
	});

	return (
		<React.Fragment>
			<Navbar id="mainNav" collapseOnSelect expand="lg">
				<Container>
					<Link className="navbar-brand" to="/">
						Leunel
					</Link>
					<Navbar.Toggle
						className="navbar-toggler"
						aria-controls="responsive-navbar-nav"
					/>
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto" />
						<Nav>
							<Link
								className="nav-link"
								to="/"
								style={{
									color: selectedColors.home.color,
									backgroundColor: selectedColors.home.backgroundColor,
								}}
								onClick={() => handleSelected('home')}
							>
								Home
							</Link>
							<Link
								className="nav-link"
								to="/posts"
								style={{
									color: selectedColors.posts.color,
									backgroundColor: selectedColors.posts.backgroundColor,
								}}
								onClick={() => handleSelected('posts')}
							>
								Posts
							</Link>
							<Link
								className="nav-link"
								to="/about"
								style={{
									color: selectedColors.about.color,
									backgroundColor: selectedColors.about.backgroundColor,
								}}
								onClick={() => handleSelected('about')}
							>
								About
							</Link>
							<Link
								className="nav-link"
								to="/contact"
								style={{
									color: selectedColors.contact.color,
									backgroundColor: selectedColors.contact.backgroundColor,
								}}
								onClick={() => handleSelected('contact')}
							>
								Contact
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</React.Fragment>
	);
};

export default Header;
