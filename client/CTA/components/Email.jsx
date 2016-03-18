import React from 'react';

export default class Email extends React.Component {

	render () {
		return (
			<form className="card z-depth-3" id="form-user" onSubmit={this.props.action}>
				<div className="row">
					<h4 className="center">Par ton email</h4>
					<div className="input-field | col s12">
						<input id="email" type="email" ref="email" />
						<label htmlFor="email">Email</label>
					</div>
					<div className="col s12">
						<button className="btn btn-large" type="submit" id="send_mail">Submit</button>
					</div>
				</div>
				<div className="row">
					<h4 className="center">OAuth</h4>
					<div className="row">
						<div className="col s12">
							<button className="btn btn-large" type="submit" id="send_mail">OAUTH</button>
						</div>
					</div>
				</div>
			</form>
		);
	}
}