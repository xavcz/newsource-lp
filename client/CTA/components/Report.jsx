import React from 'react';

export default class Report extends React.Component {

	render () {
		return (
			<form className="card z-depth-3" id="form-element" onSubmit={this.props.action}>
				<div className="row">
					<h4 className="center">Title Call To Action</h4>
					<div className="input-field | col s12">
						<input id="currentStatus" type="text" ref="currentStatus" />
						<label htmlFor="currentStatus">Current status</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field | col s12">
						<input id="context" type="text" ref="context" />
						<label htmlFor="context">Context</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field | col s12">
						<input id="problem" type="text" ref="problem" />
						<label htmlFor="problem">What's your problem?</label>
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