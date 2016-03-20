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
							<h1 className="header primary-text-color">Prendre du recul sur ton projet !</h1>
							<h3 className="header">Startuper early-stage en quête de croissance ?</h3>
							<h5 className="header primary-text-color">A partir de l'état actuel de ton projet, nous t'apportons des solutions qui poussent à l'action.</h5>
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