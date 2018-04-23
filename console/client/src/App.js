import React, { Component } from 'react';
import cx from 'classnames'
import './App.css';
import './libs/bulma.css'
import {observer} from 'mobx-react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

import SamplePage from './components/SamplePage'

class App extends Component {
	constructor (props) {
		super(props)
	}

	render() {
		const {match, location} = this.props

		return (
			<Router>
				<div>
					<nav className="navbar">
						<div className="container">
							<div className="navbar-brand is-active">
								<div className={cx("navbar-item")}>
									<Link to={"/sample-page"}>Sample Page</Link>
								</div>

								<div className={cx("navbar-item")}>
									<Link to={"/sample-page"}>Another Page</Link>
								</div>
							</div>
						</div>
					</nav>

					<Switch>
						<Route path="/sample-page" component={SamplePage}/>
						<Redirect from="/" exact to="/sample-page" />

						<Route render={() => <div className="">Not Found</div>} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default observer(App);
