require '../../dist/assets/main.css'
React = require 'react'
window.React = React
ReactDOM = require 'react-dom'
render = ReactDOM.render;
Router = require('react-router').Router
Route = require('react-router').Route
createMemoryHistory = require('history/lib/createMemoryHistory')

App = require './components/app'
routes = 
	<Router history={createMemoryHistory()}>
		<Route>
			<Route path="/" component={App} />
		</Route>
	</Router>
	
render  routes,document.getElementById 'app'