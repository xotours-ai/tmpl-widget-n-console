import React, { Component } from 'react';
import {observer} from 'mobx-react';
import cx from 'classnames'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import Store from './Store'
import './index.css'

const SubSamplePage2 = () => {return (<div>Sub Sample Page2</div>)}

/**
 * This class is for demo how to use mobx+react
 */
class SubSamplePage1 extends Component {
	constructor(args) {
		super(args)
		this.handleClickSubmit = this.handleClickSubmit.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	handleClickSubmit () {
		const {store} = this.props

		store.messages.push("User enter: "+store.input)
		store.reverse(store.input)
		store.input = ""
	}

	handleInputChange (e) {
		const {store} = this.props
		store.input = e.target.value
	}

	render () {
		const {store} = this.props

		return (<div>
			<h1>Sub Sample Page1</h1>

			<hr/>

			<input
				type="text"
				value={store.input}
				placeholder="Enter Anything"
				onChange={this.handleInputChange}
			/>

			{store.isFetchingReverse ?
				<span>Reversing</span>
				:
				<button onClick={this.handleClickSubmit}>Send</button>
			}

			<hr/>

			<ul>
				{store.messages.map((aMessage, i) => {
					return <div key={i}>{aMessage}</div>
				})}
			</ul>
		</div>)
	}
}
SubSamplePage1 = observer(SubSamplePage1) // notify the react class should monitor mobx changes


export default observer(class extends Component {
	constructor (args) {
		super(args)
		this.store = new Store()
	}

	render () {
		const {match, location} = this.props

		return (
			<div className="n900feet-page container">
				<div className="columns">
					<div className="column is-2 left-menu">
						<aside className="menu">
							<ul className="menu-list">
								<li className="">
									<Link
										className={cx({
											'is-active': location.pathname.indexOf(`/sub-page-1`)>=0
										})}
										to={`${match.url}/sub-page-1`}
									>
										SubPage 1
									</Link>
								</li>
								<li className="">
									<Link
										className={cx({
											'is-active': location.pathname.indexOf(`/sub-page-2`)>=0
										})}
										to={`${match.url}/any-variable/sub-page-2`}
									>
										SubPage 2
									</Link>
								</li>
							</ul>
						</aside>
					</div>

					<div className="column right-content">
						<Switch>
							<Route
								path={`${match.path}/sub-page-1`}
								component={() => <SubSamplePage1 store={this.store}/>}

							/>
							<Route
								path={`${match.path}/:jobId/sub-page-2`}
								component={SubSamplePage2}

							/>
							<Route
								path={`${match.path}`}
								component={() => {
									return <Redirect to={{
										pathname: `${match.path}/sub-page-1`
									}}/>
								}}
							/>
						</Switch>
					</div>
				</div>
			</div>
		)
	}
})
