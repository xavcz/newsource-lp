import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import Reports from './collections';

Reports.methods = {};

Reports.methods.createReport = new ValidatedMethod({
	name: 'Reports.methods.createReport',
	validate: Reports.schema.validator(),
	run ( report ) {
		if (Meteor.isClient) {
			// XXX analytics
		}

		return Reports.insert(report);
	}
});

export default Reports.methods;