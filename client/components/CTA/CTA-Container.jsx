import React from 'react';
import Report from './Report.jsx';
import Email from './Email.jsx';
import Thanks from './Thanks.jsx';

export default class CallToAction extends React.Component {

	// needed with ES6 way (class .. extends)
	constructor (props) {
		super(props);
		this.submitReport = this.submitReport.bind(this);
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
			<div>
				<Report />
			</div>
		);
	}
}