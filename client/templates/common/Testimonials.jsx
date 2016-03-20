import React from 'react';

export default class Testimonials extends React.Component {
	render() {
		return (
			<div className="section section__footer">
				<div className="container valign">
					<div className="row">
						<h1 className="center text-secondary-color">Nos témoignages</h1>
						<h3 className="center">Startupers ayant appliqué cette méthode</h3>
						<div className="col s12 m12 l4">
							<div className="icon-block center">
								<h5 className="primary-text-color flow-text">"On ne vient pas chercher des réponses… On vient savoir comment tacler notre problème."</h5>
								<p className="light">— Térence, COO Ad Scientiam</p>
							</div>
						</div>
						<div className="col s12 m12 l4">
							<div className="icon-block center">
								<h5 className="primary-text-color flow-text">"Au lieu de faire les choses à l'envers, on exécute maintenant dans le bon sens !"</h5>
								<p className="light">— Arthur, CTO Blackfoot Makers</p>
							</div>
						</div>
						<div className="col s12 m12 l4">
							<div className="icon-block center">
								<h5 className="primary-text-color flow-text">"J’ai eu l’impression d’apprendre un métier par semaine avec cette méthode."</h5>
								<p className="light">— Thibault, CEO Lumière</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}