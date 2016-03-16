import React from 'react';
import Dropdown from './components/Dropdown.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import BigText from './components/BigText.jsx';
import MoreGrid from './components/MoreGrid.jsx';
import Pricing from './components/Pricing.jsx';
import Faq from './components/Faq.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Dropdown />

				<Nav />

				<Hero />

				<BigText />

				<MoreGrid />

				<Pricing />

				<Faq />

				<Contact />

				<Footer />
			</div>
		);
	}
}