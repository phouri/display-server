import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import appState from './services/AppState';

import manager from './services/socketManager';

render(
	<AppContainer>
		<App appState={appState} />
	</AppContainer>,
	document.getElementById('root')
);
if (module.hot) {
	module.hot.accept('./App', () => {
		const NextApp = require('./App').default;

		render(
			<AppContainer>
				<NextApp appState={appState} />
			</AppContainer>,
			document.getElementById('root')
		);
	});
}