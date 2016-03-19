import React from 'react';

export default class Report extends React.Component {

	render () {
		return (
			<form className="card z-depth-3" id="form-report" onSubmit={this.props.onSubmit}>
				<div className="row">
					<h4 className="center">Où es-tu dans ton projet ? Nous t'apportons une solution !</h4>
					<div className="input-field | col s12">
						<input id="currentStatus" type="text" ref="currentStatus" placeholder="50 utilisateurs actifs par jour, 200€ de CA par semaine, etc." />
						<label htmlFor="currentStatus">Metric clef que tu traques maintenant</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field | col s12">
						<input id="context" type="text" ref="context" placeholder="Marketplace sportive, réseau social géolocalisé, etc." />
						<label htmlFor="context">Contexte de ton projet</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field | col s12">
						<input id="problem" type="text" ref="problem" placeholder="Comment savoir qui sont mes utilisateurs ? Comment générer plus de revenus ? Etc. ?" />
						<label htmlFor="problem">Le problème d'action que tu veux résoudre cette semaine</label>
					</div>
				</div>
				<div className="row">
					<div className="col s12">
						<button className="btn btn-large" type="submit" id="send_mail">Submit</button>
					</div>
				</div>
			</form>
		);
	}
}