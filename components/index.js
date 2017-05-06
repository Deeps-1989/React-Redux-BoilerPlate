import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

ReactDOM.render(
    <AppContainer>
        <App/>
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./app.js', () => {
        ReactDOM.render(
            <AppContainer>
                <App/>
            </AppContainer>,
            document.getElementById('app')
        );
    });
}