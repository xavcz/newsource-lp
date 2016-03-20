import { Meteor } from 'meteor/meteor';
import React from 'react';
import Helmet from 'react-helmet';

export default HeadTags = () => {
	return (
		<Helmet
			title='NewSource'
			base={{href: Meteor.absoluteUrl()}}
			meta={[
				{charset: "utf-8"},
				{name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"},
				{name: "description", content: "Service en ligne destiné à des startupers early-stage pour les pousser à l'action grâce à une prise de recul sur l'état d'avancement de leur projet."},
				// facebook
				{property: "og:type", content: "website"},
				{property: "og:url", content: Meteor.absoluteUrl()},
				{property: "og:image", content: '/img/QA.jpg'},
				{property: "og:title", content: 'NewSource'},
				{property: "og:description", content: "Service en ligne destiné à des startupers early-stage pour les pousser à l'action grâce à une prise de recul sur l'état d'avancement de leur projet."},
				//twitter
				{name: "twitter:card", content: "summary"},
				{name: "twitter:image:src", content: "/img/QA.jpg"},
				{name: "twitter:title", content: 'NewSource'},
				{name: "twitter:description", content: "Service en ligne destiné à des startupers early-stage pour les pousser à l'action grâce à une prise de recul sur l'état d'avancement de leur projet."}
			]}
			link={[
				{rel: "canonical", href: Meteor.absoluteUrl()},
				{rel: "shortcut icon", href: `${Meteor.absoluteUrl()}/favicon.ico`}
			]}
		/>
	);
};