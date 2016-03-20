import React from 'react';

export default class Report extends React.Component {

	render () {
		return (
			<form className="card z-depth-3" id="form-report" onSubmit={this.props.onSubmit}>
				<div className="row">
					<div className="input-field | col s12">
						<textarea id="context" type="text" ref="context" placeholder="Marketplace sportive, réseau social géolocalisé, etc." className="materialize-textarea validate"/>
						<label htmlFor="context" className="active">Quel est le contexte de ton projet ?</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field | col s12">
						<textarea id="currentStatus" type="text" ref="currentStatus" placeholder="50 utilisateurs actifs par jour, 200€ de CA par semaine, etc." className="materialize-textarea validate"/>
						<label htmlFor="currentStatus" className="active">Où en est la metric qui définit ton succès ?</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field | col s12">
						<textarea id="problem" type="text" ref="problem" placeholder="Comment savoir qui sont mes utilisateurs ? Comment générer plus de revenus ? Etc. ?" className="materialize-textarea validate"/>
						<label htmlFor="problem" className="active">Quel est le problème d'action que tu veux résoudre cette semaine ?</label>
					</div>
				</div>
				<div className="row">
					<div className="col s12 center-align">
						<button className="btn btn-large" type="submit" id="report">Action !</button>
					</div>
				</div>
			</form>
		);
	}
}