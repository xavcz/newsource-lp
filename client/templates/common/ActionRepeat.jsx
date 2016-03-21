import React from 'react';
import CallToAction from '../CTA/CallToAction.jsx';

export default class ActionRepeat extends React.Component {
	render () {
		return (
			<div id="contact-form" className="section section__contact">
				<div className="container">
					<div className="row">
						<div className="title-form">
							<h1 className="center text-secondary-color">C'est à toi de jouer!</h1>
							<h3 className="center">Où es-tu dans ton projet ?<br/> Nous t'apportons une solution !</h3>
						</div>
						<CallToAction button="Je passe à l'action !" />
					</div>
				</div>
			</div>
		)
	}
}