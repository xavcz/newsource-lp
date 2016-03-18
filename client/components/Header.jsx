import React from 'react';
import CTA from './CTA.jsx';

export default class Header extends React.Component {
	render() {
		return (
			<div className="section section__hero default-primary-color" id="index-banner">
				<h5 className="logo">NEWSOURCE.IO</h5>
				<div className="container">
					<div className="row">
						<div className="col s12 m7">
							<h1 className="header">Prendre du recul !</h1>
							<h3 className="header">Startuper early-stage en quête de croissance ?</h3>
							<h5 className="header">A partir de l'état actuel de ton projet, nous t'apportons des solutions qui poussent à l'action.</h5>
						</div>
						<div className="col s12 m5">
							<CTA />
						</div>
					</div>
				</div>
			</div>
		);
	}
}