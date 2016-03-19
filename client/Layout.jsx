import React from 'react';
import { analytics } from 'meteor/okgrow:analytics';


export default Layout = ({content}) => {
	analytics.page('landing page view');
	return (
		<div>
			{content}
		</div>
	);
}