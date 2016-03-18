import React from 'react';
import Header from './general-components/Header.jsx';
import Startup42 from './general-components/Startup42.jsx';
import Details from './general-components/Details.jsx';
import ActionRepeat from './general-components/ActionRepeat.jsx';
import Testimonials from './general-components/Testimonials.jsx';

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Header />

				<Details />

				<Startup42 />

				<ActionRepeat />

				<Testimonials />

			</div>
		);
	}
}