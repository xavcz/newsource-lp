import React from 'react';

export default class Faq extends React.Component {
	render() {
		return (
			<div id="faq" className="section section__faq">
				<div className="container">

					<h2 className="center">FAQs</h2>
					<ul className="collapsible center" data-collapsible="accordion">
						<li>
							<div className="collapsible-header"><p className="flow-text">Beep.</p></div>
							<div className="collapsible-body"><p>Beep.</p></div>
						</li>
						<li>
							<div className="collapsible-header"><p className="flow-text">Beep.</p></div>
							<div className="collapsible-body"><p>Beep.</p></div>
						</li>
						<li>
							<div className="collapsible-header"><p className="flow-text">Beep.</p></div>
							<div className="collapsible-body"><p>Beep.</p></div>
						</li>
					</ul>

				</div>
			</div>
		);
	}
}