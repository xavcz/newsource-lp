import React from 'react';
import CTA from './CTA.jsx';

export default class ActionRepeat extends React.Component {
	render () {
		return (
			<div id="contact-form" className="section section__contact">
				<div className="container">
					<div className="row">
						<h2 className="center">Let's Get You a Landing Page</h2>
						<CTA />
					</div>
				</div>
			</div>
		)
	}
}