import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'

if (process.env.NODE_ENV==='production') {
	var css = `_CSS_CONTENT_`,
		head = document.head || document.getElementsByTagName('head')[0],
		style = document.createElement('style');

	style.type = 'text/css';
	if (style.styleSheet){
	  style.styleSheet.cssText = css;
	} else {
	  style.appendChild(document.createTextNode(css));
	}

	head.appendChild(style);
}


window.XOTOURS_AI_FUNBO = window.XOTOURS_AI_FUNBO || {}
if (process.env.NODE_ENV==='production') {
	window.XOTOURS_AI_FUNBO.apiRoot = 'some where'
} else {
	window.XOTOURS_AI_FUNBO.apiRoot = 'http://localhost'
}

window.XOTOURS_AI_FUNBO_INIT = (args) => {
	var iDiv = document.createElement('div');
	iDiv.id = 'fungogo-ai-funbo-init';
	iDiv.className = 'fungogo-ai-funbo-init';
	document.getElementsByTagName('body')[0].appendChild(iDiv);

	ReactDOM.render(<App />, iDiv);
}

window.XOTOURS_AI_FUNBO_INIT()
