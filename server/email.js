import { Email } from 'meteor/email';
import Reports from '../lib/collections';

Accounts.onCreateUser(function(options, user) {
	const { context, metric, problem } = Reports.findOne(options.profile.reportId);

	Email.send({
		to: 'newsource@gmail.com',
		from: user.emails[0].address,
		subject: '[Landing Page] Nouveau problème',
		text: `User: ${user.emails[0].address}\n\nContexte:\n${context}\n\nMetric:\n${metric}\n\nProblème:\n${problem}`
	});
	return user;
});