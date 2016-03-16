import React from 'react';

export default class Dropdown extends React.Component {
	render() {
		return (
			<div>
				<ul id='dropdown1' className='dropdown-content'>
					<li><a id="cta__why" href="#!">Why?</a></li>
					<li><a id="cta__pricing" href="#!">Pricing</a></li>
					<li><a id="cta__faq" href="#!">FAQ</a></li>
					<li className="divider">&nbsp;</li>
					<li><a id="cta__nav" href="#!"><strong>Hire Me</strong></a></li>
				</ul>
			</div>
		);
	}
}