import React from 'react';
import CallToAction from '../CTA/CallToAction.jsx';

export default class ActionRepeat extends React.Component {
	render () {
		return (
			<div id="contact-form" className="section section__contact">
				<div className="container">
					<div className="row">
						<CallToAction />
					</div>
				</div>
			</div>
		)
	}
}