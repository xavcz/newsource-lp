import React from 'react';

export default class CTA extends React.Component {
	render () {
		return (
			<form className="card z-depth-3" id="form-element">
				<div className="row">
					<h4 className="center">Here's What I Need: <br /> <span className="underline">Two Fields</span></h4>
					<div className="input-field | col s12">
						<input id="firstName" type="text" className="validate" name="firstName" />
						<label htmlFor="firstName">Current status</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field | col s12">
						<input id="company" type="text" name="company" />
						<label htmlFor="company">Context</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field | col s12">
						<input id="email" type="email" className="validate" name="email" />
						<label htmlFor="email">What's your problem?</label>
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