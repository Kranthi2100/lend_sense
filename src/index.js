import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './styles/index.css';
import App from './components/app';

import configStore from './store/configStore';

const store = configStore();

const AppContainer = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(<AppContainer />, document.getElementById('root'));
