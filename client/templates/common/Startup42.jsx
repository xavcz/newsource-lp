import React from 'react';

export default class Startup42 extends React.Component {
	render() {
		return (
			<div id="why" className="container">
				<div id="because-I-do-everything" className="section section__bigflow center-align">
					<h1 className="center text-secondary-color">Avec la contribution et l'expertise de</h1>
					<img src="/img/logo_startup42-fond_clair.png" height="70%" width="70%"/>
					<blockquote className="flow-text">
						<p>En trois ans d'accélération de startups early-stage, Startup42 a développé une méthodologie qui permet aux entrepreneurs d'acquérir les bons reflexes en quelques semaines.</p>
						<p>Quelles questions se poser au bon moment ? Dans quelles ressource piocher les réponses ? A qui aller parler ?</p>
						<p>Ce sont des milliers de conseils de mentors que nous avons réunis et Newsource.io permet à tous d'enfin y accéder !</p>
					</blockquote>
					<p>— Maxime Pico, Managing Director de Startup42</p>
				</div>
			</div>
		);
	}
}