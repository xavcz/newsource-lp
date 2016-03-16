import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import Layout from './Layout.jsx';

Meteor.startup(() => {
  render(<Layout />, document.getElementById('app'));
});