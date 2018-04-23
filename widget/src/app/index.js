import React, { Component } from 'react'
import {observer} from 'mobx-react';

require('./index.css')

export default class SampleApp extends Component {
	constructor(args) {
		super(args)
	}

	render () {
		console.log('window.XOTOURS_AI_FUNBO', window.XOTOURS_AI_FUNBO)

		// window.XOTOURS_AI_FUNBO.userId is a bad practice, it should be given by props.

		return <div className="hello-world">
			<span>Hello, </span>
			<span>{window.XOTOURS_AI_FUNBO.userId ? window.XOTOURS_AI_FUNBO.userId : 'World'}</span>
		</div>
	}
}
