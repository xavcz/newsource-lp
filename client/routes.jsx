import { Meteor } from 'meteor/meteor';
import React from 'react';
import { mount } from 'react-mounter';

import Layout from './Layout.jsx';

import Header from './general-components/Header.jsx';
import Startup42 from './general-components/Startup42.jsx';
import Details from './general-components/Details.jsx';
import ActionRepeat from './general-components/ActionRepeat.jsx';
import Testimonials from './general-components/Testimonials.jsx';

FlowRouter.route("/", {
  action() {
    mount(Layout, {
      content: (
        <div>
          <Header />
          <Details />
          <Startup42 />
          <ActionRepeat />
          <Testimonials />
        </div>
      )
    });
  }
});