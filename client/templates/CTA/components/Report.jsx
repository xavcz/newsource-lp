import React from 'react';

export default class Report extends React.Component {

	render () {
		return (
			<form className="card z-depth-3" id="form-report" onSubmit={this.props.onSubmit}>
				<div className="row">
					<div className="input-field | col s12">
						<textarea id="context" type="text" ref="context" placeholder="Marketplace sportive, réseau social géolocalisé, etc." className="materialize-textarea validate"/>
						<label htmlFor="context" className="active">Le contexte de ton projet</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field | col s12">
						<textarea id="currentStatus" type="text" ref="currentStatus" placeholder="50 utilisateurs actifs par jour, 200€ de CA par semaine, etc." className="materialize-textarea validate"/>
						<label htmlFor="currentStatus" className="active">La metric clef que tu traques maintenant</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field | col s12">
						<textarea id="problem" type="text" ref="problem" placeholder="Comment savoir qui sont mes utilisateurs ? Comment générer plus de revenus ? Etc. ?" className="materialize-textarea validate"/>
						<label htmlFor="problem" className="active">Le problème d'action que tu veux résoudre cette semaine</label>
					</div>
				</div>
				<div className="row">
					<div className="col s12">
						<button className="btn btn-large" type="submit" id="send_mail">Donnez-moi un coup de main !</button>
					</div>
				</div>
			</form>
		);
	}
}