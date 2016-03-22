import React from 'react';

export default class Startup42 extends React.Component {
	render() {
		return (
			<div id="why" className="container">
				<div id="because-I-do-everything" className="section section__bigflow center-align">
					<h1 className="center text-secondary-color">Méthode validée</h1>
					<h3 className="center">Avec la contribution et l'expertise de</h3>
					<img src="/img/logo_startup42-fond_clair.png" height="70%" width="70%"/>
					<blockquote className="flow-text">
						<p>En trois ans d'accélération de startups early-stage, Startup42 a développé une méthodologie qui permet aux entrepreneurs d'acquérir les bons réflexes en quelques semaines.</p>
						<p>Quelles questions se poser au bon moment ? Dans quelles ressources piocher les réponses ? À qui aller parler ?</p>
						<p>NewSource.io permet à tous d'accéder aux bonnes ressources au bon moment grâce aux conseils de notre important réseaux de mentors !</p>
					</blockquote>
					<p>— Maxime Pico, Managing Director de Startup42</p>
				</div>
			</div>
		);
	}
}