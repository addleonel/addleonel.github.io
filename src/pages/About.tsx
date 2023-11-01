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
						<h2 style={{ marginBottom: '30px' }}>Hi</h2>
						<p>
							Hi my name is Leunel I am a software programmer with a passion for
							web development, Artificial Inteligence, and IoT.
						</p>
						<img
							src="https://avatars.githubusercontent.com/u/62483482?v=4"
							width={'100px'}
						/>
					</div>
				</div>
			</main>
		</React.Fragment>
	);
};

export default About;
