import React from 'react';
import CTA from './CTA.jsx';

export default class ActionRepeat extends React.Component {
	render () {
		return (
			<div id="contact-form" className="section section__contact">
				<div className="container">
					<div className="row">
						<h2 className="center text-secondary-color">Dis nous tout !</h2>
						<CTA />
					</div>
				</div>
			</div>
		)
	}
}