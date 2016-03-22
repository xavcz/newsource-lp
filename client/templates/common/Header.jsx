import React from 'react';
import CallToAction from '../CTA/CallToAction.jsx';

export default class Header extends React.Component {
	render() {
		return (
			<div className="section section__hero" id="index-banner">
				<h5 className="logo">NEWSOURCE.IO</h5>
				<div className="container">
					<div className="row">
						<div className="col s12 m7">
							<h1 className="header primary-text-color" style={{letterSpacing: '0.8px'}}>Startuper en quête de croissance ?</h1>
							<h3 className="header" style={{letterSpacing: '0.8px'}}>Avance vite, et mieux !</h3>
							<h5 className="header flow-text primary-text-color">À partir de l'état actuel de ton projet, nous t'apportons des ressources qui te poussent à l'action. Plus qu'un outil, c'est une méthode.</h5>
						</div>
						<div className="col s12 m5">
							<CallToAction button="Action !" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}