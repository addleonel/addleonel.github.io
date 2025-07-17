import * as React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import AllPosts from '../pages/AllPosts';
import About from '../pages/About';
import Contact from '../pages/Contact';
import PostContent from '../pages/posts/PostContent';
import Cipersonal from '../pages/Cipersonal';

// styles
import '../assets/styles/App.scss';

const App: React.FC = () => {
	return (
		<React.Fragment>
			<Router>
				<Header />
				<div className="wrap">
					<div className="main">
						<Routes>
							<Route exact={true} path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/Posts" element={<AllPosts />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/ci-personal" element={<Cipersonal />} />
							<Route
								path="/posts/full-text-search-django-postgress"
								element={<PostContent />}
							/>
							<Route
								path="*"
								element={
									<div>
										<h2>404 - Page Not Found</h2>
										<p>The page you are looking for does not exist.</p>
									</div>
								}
							/>
						</Routes>
					</div>
				</div>

				<div className="footer">
					<Footer />
				</div>
			</Router>
		</React.Fragment>
	);
};

export default App;
