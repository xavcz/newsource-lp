Reports = new Mongo.Collection('reports');

Reports.attachSchema(new SimpleSchema({
	currentStatus: {
		type: String
	},
	context: {
		type: String
	},
	problem: {
		type: String
	}
}));

export default Reports;