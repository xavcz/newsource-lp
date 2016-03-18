import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Reports = new Mongo.Collection('reports');

Reports.schema = new SimpleSchema({
	currentStatus: {
		type: String
	},
	context: {
		type: String
	},
	problem: {
		type: String
	}
});

Reports.attachSchema(Reports.schema);

export default Reports;