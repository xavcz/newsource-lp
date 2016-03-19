import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import Reports from '../lib/collections';

Reports.methods = {};

Reports.methods.createReport = new ValidatedMethod({
	name: 'Reports.methods.createReport',
	validate: Reports.schema.validator(),
	run (report) {
		return Reports.insert(report);
	}
});

Reports.methods.assignReport = new ValidatedMethod({
	name: 'Reports.methods.assignReport',
	validate: new SimpleSchema({
		email: { type: SimpleSchema.RegEx.Email },
		reportId: { type: String }
	}).validator(),
	run ({ email, reportId }) {
		const userId = Accounts.createUser({
			email,
			password: '',
			profile: { reportId }
		});
	}
});

export default Reports.methods;