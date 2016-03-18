import { Meteor } from 'meteor/meteor';
import { ReactiveDict } from 'meteor/reactive-dict';
import React from 'react';

import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Report from './components/Report.jsx';
import Email from './components/Email.jsx';
import Thanks from './components/Thanks.jsx';

const data = new ReactiveDict('data');
data.setDefault('step', 1);
data.setDefault('report', {});
data.setDefault('errors', {});

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

		// UI step change
		data.set('step', 2);

		Meteor.call('Reports.methods.createReport', report, (err, res) => {
			if (err) {
				//this.state.errors.submit = 'Une erreur est arrivée, merci de ré-essayer!';
				data.set('step', 1);
				throw new Meteor.Error(error);
			}

			_.extend(report, {_id: res});
			data.set('report', report);
		});
	}

	submitEmail (event) {
		event.preventDefault();
		const user = {
			email: event.currentTarget[0].value.trim(),
			reportId: data.get('report')._id
		};

		data.set('step', 3);

		Meteor.call('Reports.method.assignReport', user, (err, res) => {
			if (err) {
				data.set('step', 3);
				throw new Meteor.Error(err);
			}
		});
	}

	render () {

		return (
			<div>
				{data.get('step') === 1 ?
					<Report onSubmit={this.submitReport} /*errors={this.state.errors}*/ />
					: data.get('step') === 2 ?
						<Email onSubmit={this.submitEmail} oauth={this.oAuth} />
						: <Thanks />
				}
			</div>
		);
	}
}