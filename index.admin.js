// @flow

require('es6-promise').polyfill();
import 'whatwg-fetch';

import React from 'react';
import { render } from 'react-dom';
import Application from './admin/app.admin';

render(
  <Application />,
  document.getElementById('react-root')
);
