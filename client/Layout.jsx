import React from 'react';
import Header from './components/Header.jsx';
import Startup42 from './components/Startup42.jsx';
import Details from './components/Details.jsx';
import ActionRepeat from './components/ActionRepeat.jsx';
import Testimonials from './components/Testimonials.jsx';

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