import React from 'react';

export default class Startup42 extends React.Component {
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
			<div id="why" className="container">
				<div className="section section__bigflow center-align">
					<div className="row">
						<h1 className="center text-secondary-color">Avec la contribution et l'expertise de</h1>
						<img src="/img/logo_startup42-fond_clair.png" height="70%" width="70%"/>
						<blockquote className="flow-text">
							<p>En trois ans d'accélération de startups early-stage, Startup42 a développé une méthodologie qui permet aux entrepreneurs d'acquérir les bons réflexes en quelques semaines.</p>
							<p>Quelles questions se poser au bon moment ? Dans quelles ressources piocher les réponses ? À qui aller parler ?</p>
							<p>NewSource.io permet à tous d'accéder aux bonnes ressources au bon moment grâce aux conseils de notre important réseaux de mentors !</p>
						</blockquote>
						<p>— Maxime Pico, Managing Director de Startup42</p>
					</div>
					<div className="row">
						<div className="col s4 offset-s4">
							<a className="btn btn-large waves-effect waves-light" href="https://newsource.typeform.com/to/dvFv0H" ref="CTA" onClick={this.redirectTypeform}>{text}</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}