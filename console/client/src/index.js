import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// global confs
window.CONFS = {
	apiServer: process.env.REACT_APP_WEB_API_SERVER || "http://localhost:23360/v1.0"
}

console.log('Use confs', window.CONFS);

// run the app
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

