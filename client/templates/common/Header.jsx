import React from 'react';
import CallToAction from '../CTA/CallToAction.jsx';

export default class Header extends React.Component {
	constructor () {
		super();
		this.redirectTypeform = this.redirectTypeform.bind(this);
		this.state = {action: false};
	}

	redirectTypeform (event) {
		this.setState({action: !this.state.action});
	}

	render() {
		const text = this.state.action ? "Chargement..." : 'Essaye notre méthode';
		return (

			<div className="section section__hero valign-wrapper" id="index-banner">
				<div className="container">
					<div className="row">
						<div className="col s12">
							<h1 className="header" style={{letterSpacing: '0.8px'}}>Startuper en quête de croissance?</h1>
							<h3 className="header" style={{letterSpacing: '0.8px'}}>Avance vite, et mieux!</h3>
							<h5 className="header flow-text" style={{color: '#fff'}}>En fonction de ton projet et de son état actuel, NewSource t'apporte des ressources et des informations personnalisées qui te poussent à l'action. Plus qu'un outil, c'est une méthode.</h5>
						</div>
					</div>
					<div className="row">
						<div className="col s4 offset-s4">
							<a className="btn btn-large waves-effect waves-light" ref="CTA" href="https://newsource.typeform.com/to/dvFv0H" onClick={this.redirectTypeform}>{text}</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}