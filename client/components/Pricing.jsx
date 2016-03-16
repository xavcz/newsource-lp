import React from 'react';

export default class Pricing extends React.Component {
	render() {
		return (
			<div id="pricing" className="section section__pricing | center">
				<div className="row">
					<h2 className="center">Pricing</h2>
					<div className="col s12 m12 l6">
						<div className="card">
							<h2>Option #1</h2>
							<i className="small mdi-action-done-all">&nbsp;</i>
							<p className="bold">Information about this option.</p>
							<a className="btn btn-large | activator" href="#!">Pricing</a>
							<div className="card-reveal">
								<span className="card-title"> <i className="mdi-navigation-close right">&nbsp;</i><br />More information.</span>
								<p>Beep.</p>
								<p className="price">Beep.</p>
							</div>
						</div>
					</div>
					<div className="col s12 m12 l6">
						<div className="card">
							<h2>Option #2</h2>
							<i className="small mdi-action-done">&nbsp;</i>
							<p className="bold">Information here about this option.</p>
							<a className="btn btn-large | activator" href="#!">Pricing</a>
							<div className="card-reveal">
								<span className="card-title"> <i className="mdi-navigation-close right"></i><br />More information.</span>
								<p> Beep. </p>
								<p className="price">Beep.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}