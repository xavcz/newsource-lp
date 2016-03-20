import { Meteor } from 'meteor/meteor';
import React from 'react';
import { mount } from 'react-mounter';

import Layout from './Layout.jsx';

import Header from './common/Header.jsx';
import Startup42 from './common/Startup42.jsx';
import Details from './common/Details.jsx';
import ActionRepeat from './common/ActionRepeat.jsx';
import Testimonials from './common/Testimonials.jsx';

FlowRouter.route("/", {
  action() {
    mount(Layout, {
      content: (
        <div>
          <Header />
          <Details />
          <Testimonials />
          <Startup42 />
          <ActionRepeat />
        </div>
      )
    });
  }
});