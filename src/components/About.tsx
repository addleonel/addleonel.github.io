import * as React from 'react';
import { Helmet } from 'react-helmet';

const About: React.FC = () => {
	return (
		<React.Fragment>
			<Helmet>
				<title>About me</title>
			</Helmet>
			<main className="container">
				<div className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						<h2 style={{ marginBottom: '30px' }}>About me</h2>
						<p>
							I am a software developer with a passion for web development. I
							have a strong background in web development and have worked with
							many different languages and frameworks. I am currently working on
							a project that is a web application for a local business.
						</p>
					</div>
				</div>
			</main>
		</React.Fragment>
	);
};

export default About;
