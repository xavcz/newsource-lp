import React from 'react';
import CallToAction from '../CTA/CallToAction.jsx';

export default class ActionRepeat extends React.Component {
	render () {
		return (
			<div id="contact-form" className="section section__contact">
				<div className="container">
					<div className="row">
						<h1 className="center title-form">Où es-tu dans ton projet ?<br/> Nous t'apportons une solution !</h1>
						<CallToAction />
					</div>
				</div>
			</div>
		)
	}
}