import { Meteor } from 'meteor/meteor';
import React from 'react';
import { mount } from 'react-mounter';

import Layout from './Layout.jsx';

import Header from './view/common/Header.jsx';
import Startup42 from './view/common/Startup42.jsx';
import Details from './view/common/Details.jsx';
import ActionRepeat from './view/common/ActionRepeat.jsx';
import Testimonials from './view/common/Testimonials.jsx';

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