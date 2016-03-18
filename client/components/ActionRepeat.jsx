import React from 'react';
import CallToAction from './CTA/CTA-Container.jsx';

export default class ActionRepeat extends React.Component {
	render () {
		return (
			<div id="contact-form" className="section section__contact">
				<div className="container">
					<div className="row">
						<h2 className="center text-secondary-color">Dis nous tout !</h2>
						<CallToAction />
					</div>
				</div>
			</div>
		)
	}
}