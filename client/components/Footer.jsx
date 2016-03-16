import React from 'react';

export default class Footer extends React.Component {
	render() {
		return (
			<footer className="page-footer | grey lighten-2 | valign-wrapper">
				<div className="container valign">
					<div className="row">
						<div className="col s12 m6 valign">
							<h5 className="center-align">About the Site</h5>
							<p className="center-align">
								The front end was built using the <a href="http://materializecss.com">Materialize</a> framework, and the back end was built with <a href="http://expressjs.com/">Express</a>. Coded with &hearts; and released <a href="http://github.com/conversion-ape/homepage/">open source.</a> Hosted on <a href="http://www.heroku.com">Heroku</a>. No PHP was harmed in the making of this production.
							</p>
						</div>
						<div className="col s12 m6 valign">
							<h5 className="center-align">Give Me a Shout!</h5>
							<p className="center-align">
								<a href="http://twitter.com/oompt" className="btn__twitter" > <span>twitter.com/</span>oompt </a> <br />
								<a href="http://github.com/oompt" className="btn__twitter" > <span>github.com/</span>oompt </a> <br />
							</p>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}