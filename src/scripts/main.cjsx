require '../../dist/assets/main.css'
React = require 'react'
ReactDOM = require 'react-dom'
render = ReactDOM.render
Router = require('react-router').Router
Route = require('react-router').Route
IndexRoute = require('react-router').IndexRoute
history = require('history').createHistory()


window.React = React
window.ReactDom = ReactDOM

Header 		= require './components/shared/header.cjsx'
Welcome		= require './components/welcome'
Login			= require './components/login'
Page2 		= require './components/page2'

Wrapper = React.createClass



  render:->
        <div>
            <Header />
            <div className="container main">
              {this.props.children}
            </div>
        </div>

routes =
	<Router history={history}>
		<Route path="/" component={Wrapper}>
			<IndexRoute component={Welcome} />
			<Route path="login" component={Login} />
			<Route path="page2" component={Page2} />
		</Route>
	</Router>

render  (routes) ,document.getElementById 'app'
