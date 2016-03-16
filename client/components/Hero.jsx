import React from 'react';

export default class Hero extends React.Component {
	render() {
		return (
			<div className="section section__hero" id="index-banner">
				<div className="container">
					<div className="row">
						<div className="col s12 m7">
							<h1 className="header">Title here</h1>
							<h3 className="header">Subtitle here.</h3>
							<h5 className="header">Other stuff here.</h5>
						</div>
						<div className="col s12 m5 gorilla"> </div>
					</div>
					<div className="row center">
						<a id="cta__main" href="#!" className="btn btn-large">I'd Like to Learn More &raquo;</a>
					</div>
				</div>
			</div>
		);
	}
}