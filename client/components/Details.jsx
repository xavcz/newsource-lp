import React from 'react';

export default class Details extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="section section__more-grid">
					<div className="row">
						<h2 className="center text-secondary-color">Ta startup a une vision..</h2>
						<div className="col s6">
							<div className="icon-block">
								<h2 className="center"><img className="icon icons8-Guest" src="data:image/png;base64,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" width="96" height="96"/></h2>
								<h5 className="center">Startuper early-stage</h5>
								</div>
						</div>
						<div className="col s6">
							<div className="icon-block">
								<h2 className="center"><i className="mdi-editor-format-paint"></i></h2>
								<h5 className="center">État du projet</h5>
							</div>
						</div>
					</div>
					<div className="row">
						<h2 className="center text-secondary-color">..nous avons des solutions d'action !</h2>
						<div className="col s12 m12 l4">
							<div className="icon-block">
								<h2 className="center"><i className="mdi-action-visibility"></i></h2>
								<h5 className="center">Focus à la semaine</h5>
							</div>
						</div>
						<div className="col s12 m12 l4">
							<div className="icon-block">
								<h2 className="center"><i className="mdi-content-create"></i></h2>
								<h5 className="center">Prise de recul</h5>
							</div>
						</div>
						<div className="col s12 m12 l4">
							<div className="icon-block">
								<h2 className="center"><i className="mdi-editor-attach-money"></i></h2>
								<h5 className="center">Actions concrètes</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}