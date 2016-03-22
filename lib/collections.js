import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Reports = new Mongo.Collection('reports');

Reports.schema = new SimpleSchema({
	context: {
		type: String
	},
	metric: {
		type: String
	},
	problem: {
		type: String
	}
});

Reports.attachSchema(Reports.schema);

export default Reports;