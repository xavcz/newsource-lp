import React from 'react';
import HeadTags from './HeadTags.jsx';
//import { analytics } from 'meteor/okgrow:analytics';


export default Layout = ({content}) => {
	analytics.page('landing page view');
	return (
		<div>
			<HeadTags />
			{content}
		</div>
	);
}