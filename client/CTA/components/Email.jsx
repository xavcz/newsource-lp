import React from 'react';

export default class Email extends React.Component {

	render () {
		return (
			<div className="card z-depth-3">
				<h5 className="center">Afin de te répondre, donne-nous ton contact :</h5>
				<div className="row">
					<form id="form-user" onSubmit={this.props.action}>
						<div className="input-field | col s12">
							<input id="email" type="email" ref="email" />
							<label htmlFor="email">Ton email</label>
						</div>
						<div className="col s12">
							<button className="btn btn-large" type="submit" id="send_mail">Envoyer</button>
						</div>
					</form>
				</div>
				<div className="row">
					<h5 className="center">Ou avec :</h5>
					<div className="row">
						<div className="col s12">
							<button className="btn-floating btn-large waves-effect waves-light dark-blue">in</button>
							<button className="btn-floating btn-large waves-effect waves-light light-blue">T</button>
							<button className="btn-floating btn-large waves-effect waves-light red">G</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

