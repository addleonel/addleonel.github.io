import * as React from 'react';
import { Helmet } from 'react-helmet';

const Contact: React.FC = () => {
	return (
		<React.Fragment>
			<Helmet>
				<title>Contact me</title>
			</Helmet>
			<main className="container">
				<div className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						<h2 style={{ marginBottom: '30px' }}>Contact me</h2>
					</div>
				</div>
			</main>
		</React.Fragment>
	);
};

export default Contact;
