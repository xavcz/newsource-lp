import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './components/HelloWorld.jsx';

Meteor.startup(() => {
  render(<HelloWorld/>, document.getElementById('app'));
});