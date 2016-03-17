import React from 'react';

export default class CTA extends React.Component {

	// needed with ES6 way (class .. extends)
	constructor (props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	submitReport (event) {
		event.preventDefault();

		const report = {
			currentStatus: this.refs.currentStatus.value.trim(),
			context: this.refs.context.value.trim(),
		 	problem: this.refs.problem.value.trim()
		};

		// XXX send to method

		this.refs.currentStatus.value = '';
		this.refs.context.value = '';
		this.refs.problem.value = '';
	}

	render () {
		return (
			<form className="card z-depth-3" id="form-element" onSubmit={this.submitReport}>
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