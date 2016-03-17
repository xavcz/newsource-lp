import React from 'react';

export default class Testimonials extends React.Component {
	render() {
		return (
			<footer className="page-footer | grey lighten-2 | valign-wrapper">
				<div className="container valign">
					<div className="row">
						<h2 className="center">Témoignages</h2>
						<div className="col s12 m12 l4">
							<div className="icon-block">
								<h2 className="center"><i className="mdi-editor-format-paint"></i></h2>
								<h5 className="center">Ad Scientiam</h5>
								<p className="light">Ipsum soluta magnam debitis similique facilis! Illo eius veritatis dolor repudiandae illum consequatur quia quaerat. Sed fugiat sequi a placeat deserunt. Atque possimus pariatur accusantium dolores iusto, quo doloremque alias. </p>
							</div>
						</div>
						<div className="col s12 m12 l4">
							<div className="icon-block">
								<h2 className="center"><i className="mdi-action-thumb-up"></i></h2>
								<h5 className="center">Blackfoot Makers</h5>
								<p className="light">Ipsum soluta magnam debitis similique facilis! Illo eius veritatis dolor repudiandae illum consequatur quia quaerat. Sed fugiat sequi a placeat deserunt. Atque possimus pariatur accusantium dolores iusto, quo doloremque alias. </p>
							</div>
						</div>
						<div className="col s12 m12 l4">
							<div className="icon-block">
								<h2 className="center"><i className="mdi-hardware-phonelink"></i></h2>
								<h5 className="center">Lumière</h5>
								<p className="light">Ipsum soluta magnam debitis similique facilis! Illo eius veritatis dolor repudiandae illum consequatur quia quaerat. Sed fugiat sequi a placeat deserunt. Atque possimus pariatur accusantium dolores iusto, quo doloremque alias. </p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}