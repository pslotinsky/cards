import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';

import { Store } from './models/Store';

import { App } from './App';
import registerServiceWorker from './registerServiceWorker';

const store = new Store();

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
);

registerServiceWorker();
