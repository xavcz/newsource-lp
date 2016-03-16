import React from 'react';

export default class Nav extends React.Component {
	render() {
		return (
			<nav role="navigation">
				<div className="container">
					<div className="nav-wrapper">
						<ul className="right">
							<li><a className="modal-trigger" href="#modal-about">
								About
							</a></li>
							<li> <a className="dropdown-button" href="#!" data-activates="dropdown1">
								Hire Me
								<i className="mdi-navigation-arrow-drop-down right">&nbsp;</i>
							</a> </li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}