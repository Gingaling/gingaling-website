import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css';

ReactDOM.render(
	<Router>
		<Auth0Provider
			domain="dev-6weec-mf.us.auth0.com"
			clientId="1H3a1ChTTjpmjqjNVaWxscVzcxSarzOG"
			redirectUri={window.location.origin}>
			<App />
		</Auth0Provider>,
	</Router>,
	document.getElementById('root')
);
