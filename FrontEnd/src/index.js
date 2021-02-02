import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import { MetroApp } from './MetroApp';

import './index.css';

const domain = "dev-i57241w2.us.auth0.com";
const clientId = "PyjVJeptOHJcXuuKJKaV4jelFVMlcOW9";
// const clientId = "pKpsSHAnNBM7URP16DTngY07zkEFUPcA";

ReactDOM.render(
<Auth0Provider
    domain = { domain }
    clientId = { clientId }
    redirectUri = { window.location.origin }
    >
    <MetroApp />
  </Auth0Provider>,
  document.getElementById('root')
);

