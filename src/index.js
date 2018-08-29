import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../node_modules/spectre.css/dist/spectre.min.css"
import "../node_modules/spectre.css/dist/spectre-icons.min.css"
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
