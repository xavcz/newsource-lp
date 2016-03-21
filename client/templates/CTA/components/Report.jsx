import React from 'react';

export default class Report extends React.Component {

	render () {
		return (
			<form className="card z-depth-3" id="form-report" onSubmit={this.props.onSubmit}>
				<div className="row">
					<div className="input-field | col s12">
						<textarea id="context" type="text" ref="context" placeholder="Décrit-nous ton projet: où est-ce que tu en es, depuis combien de temps as-tu commencé, tes objectifs, etc.." className="materialize-textarea validate"/>
						<label htmlFor="context" className="active">Quel est le contexte de ton projet ?</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field | col s12">
						<textarea id="currentStatus" type="text" ref="currentStatus" placeholder="Qu'est ce que tu mesures ? Qu'est ce qui te permet de dire si le projet avance, recul ou stagne ?" className="materialize-textarea validate"/>
						<label htmlFor="currentStatus" className="active">Où en est la metric qui définit ton succès ?</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field | col s12">
						<textarea id="problem" type="text" ref="problem" placeholder="Que veux-tu réaliser de concret pour faire avancer ton projet dans la semaine qui suis ?" className="materialize-textarea validate"/>
						<label htmlFor="problem" className="active">Quel est le problème d'action que tu veux résoudre cette semaine ?</label>
					</div>
				</div>
				<div className="row">
					<div className="col s12 center-align">
						<button className="btn btn-large" type="submit" id="report">{this.props.button}</button>
					</div>
				</div>
			</form>
		);
	}
}