import React from 'react';

export default class Contact extends React.Component {
	render() {
		return (
			<div id="contact-form" className="section section__contact">
				<div className="container">
					<div className="row">
						<h2 className="center">Let's Get You a Landing Page</h2>
						<form className="col s12 l6 card z-depth-3" action="" method="" id="form-element">
							<div className="row">
								<h4 className="center">Here's What I Need: <br /> <span className="underline">Two Fields</span></h4>
								<div className="input-field | col s12">
									<input id="firstName" type="text" className="validate" name="firstName" />
										<label htmlFor="firstName">Name <span className="required">(required)</span></label>
								</div>
							</div>
							<div className="row">
								<div className="input-field | col s12">
									<input id="company" type="text" name="company" />
									<label htmlFor="company">Company <span className="optional" >(optional)</span></label>
								</div>
							</div>
							<div className="row">
								<div className="input-field | col s12">
									<input id="email" type="email" className="validate" name="email" />
									<label htmlFor="email">Email <span className="required">(required)</span></label>
								</div>
							</div>
							<div className="row">
								<div className="col s12">
									<select>
										<option defaultValue="I need a quick quote!">I need a quick quote!</option>
										<option value="I have more questions!">I have more questions!</option>
									</select>
								</div>
							</div>
							<div className="row">
								<div className="input-field col s12">
									<textarea id="textarea1" className="materialize-textarea" name="textarea1" />
									<label htmlFor="textarea1">Comments <span className="optional">(optional)</span></label>
								</div>
							</div>
							<div className="row">
								<div className="col s12">
									<button className="btn btn-large" type="submit" id="send_mail">Submit</button>
								</div>
								<span id="email_message"></span>
							</div>
						</form>
						<div className="col l6 hide-on-med-and-down">
							<div className="hire-notes center">
								<h4>In closing...</h4>
								<div className="icon-container">
									<i className="medium mdi-action-extension" /> <br />
									<h5>This..</h5>
								</div>
								<p>Elit possimus maiores numquam harum neque assumenda expedita. Consectetur amet eum atque cupiditate temporibus, quaerat eos. Eos maiores sunt sapiente aut impedit. Doloribus nulla quod ab sed nostrum. Molestias eaque. </p>
								<div className="icon-container">
									<i className="medium mdi-toggle-check-box" /> <br />
									<h5>And that.</h5>
								</div>
								<p>Ipsum nemo rerum accusantium provident dolore? Commodi dolores expedita perspiciatis at eveniet. Nobis soluta a fuga possimus quod nesciunt, saepe obcaecati optio nemo repudiandae fugiat possimus culpa? Dolores natus natus! </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}