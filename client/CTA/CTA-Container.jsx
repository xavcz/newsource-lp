import React from 'react';

import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Report from './components/Report.jsx';
import Email from './components/Email.jsx';
import Thanks from './components/Thanks.jsx';

const data = new ReactiveDict('data');
data.setDefault('step', 1);
data.setDefault('report', {});
data.setDefault('email', '');

export default class CallToAction extends TrackerReact(React.Component) {

	// needed with ES6 way (class .. extends)
	constructor (props) {
		super(props);
		this.submitReport = this.submitReport.bind(this);
		this.submitEmail = this.submitEmail.bind(this);
	}

	submitReport (event) {
		event.preventDefault();

		const report = {
			currentStatus: event.currentTarget[0].value.trim(),
			context: event.currentTarget[0].value.trim(),
		 	problem: event.currentTarget[0].value.trim()
		};

		// XXX send to method

		data.set('report', report);
		data.set('step', 2);
	}

	fillingErrors () {
		return this.errors = {};
	}

	submitEmail (event) {
		event.preventDefault();

		data.set('email', event.currentTarget[0].value.trim());
		data.set('step', 3);
	}

	oAuth (service) {

	}

	render () {

		return (
			<div>
				{data.get('step') === 1 ?
					<Report submit={this.submitReport} errors={this.errors} />
					: data.get('step') === 2 ?
						<Email submit={this.submitEmail} oauth={this.oAuth} />
						: <Thanks />
				}
			</div>
		);
	}
}