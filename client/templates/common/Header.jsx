import React from 'react';
import CallToAction from '../CTA/CallToAction.jsx';

export default class Header extends React.Component {
	render() {
		return (
			<div className="section section__hero default-primary-color" id="index-banner">
				<h5 className="logo">NEWSOURCE.IO</h5>
				<div className="container">
					<div className="row">
						<div className="col s12 m7">
							<h1 className="header primary-text-color" style={{letterSpacing: '0.8px'}}>Avancer vite, et mieux !</h1>
							<h3 className="header">Startuper early-stage en quête de croissance ?</h3>
							<h5 className="header flow-text primary-text-color">A partir de l'état actuel de ton projet, nous t'apportons des solutions qui poussent à l'action. Plus qu'un outil, c'est une méthode.</h5>
						</div>
						<div className="col s12 m5">
							<CallToAction />
						</div>
					</div>
				</div>
			</div>
		);
	}
}