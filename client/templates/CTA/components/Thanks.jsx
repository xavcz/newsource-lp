import React from 'react';

export default class Thanks extends React.Component {

	render () {
		return (
			<form className="card z-depth-3" id="thanks">
				<div className="row center">
					<div className="icon-block">
						<h2><img className="icon icons8-Action" src="http://cultofthepartyparrot.com/parrots/parrot.gif" width="70" height="50"/></h2>
					</div>
					<h2>Merci !<br/>On te répond au plus vite !</h2>
				</div>
			</form>
		);
	}
}