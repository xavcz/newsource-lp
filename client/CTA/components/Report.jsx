import React from 'react';

export default class Report extends React.Component {

	render () {
		return (
			<form className="card z-depth-3" id="form-report" onSubmit={this.props.onSubmit}>
				<h4 className="center">État actuel de ta startup</h4>
				<div className="row">
					<div className="form-group | col s12">
						<div className="input-field input-success">
							<label className="control-label active">Où en est la metric qui définit ton succès ?</label>
							<input id="currentStatus" type="text" ref="currentStatus" placeholder="50 utilisateurs actifs par jour, 200€ de CA par semaine, etc." />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="form-group | col s12">
						<div className="input-field input-success">
							<label className="control-label active">Quel est le contexte de ton projet ?</label>
							<input id="context" type="text" ref="context" placeholder="Marketplace sportive, réseau social géolocalisé, etc." />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="form-group | col s12">
						<div className="input-field input-success">
							<label className="control-label active">Quel est le problème d'action que tu veux résoudre cette semaine ?</label>
							<input id="context" type="text" ref="context" placeholder="Comment savoir qui sont mes utilisateurs ? Comment générer plus de revenus ? Etc. ?" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col s12 center-align">
						<button className="btn btn-large" type="submit" id="send_mail">Passe à l'Action</button>
					</div>
				</div>
			</form>
		);
	}
}