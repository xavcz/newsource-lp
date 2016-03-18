import React from 'react';

export default Layout = ({content}) => {
	analytics.page('landing page view');
	return (
		<div>
			{content}
		</div>
	);
}