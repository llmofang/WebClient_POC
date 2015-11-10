React = require 'react'
ReactDOM = require 'react-dom'
render = ReactDOM.render
{ Link } = require 'react-router'

{ Navbar, NavBrand, Grid, Row, Col ,Button} = require 'react-bootstrap'

window.React = React
window.ReactDom = ReactDOM

module.exports = React.createClass
  render: ->
    <div>
        <Link to="/Page">Inbox</Link>
        <Link to="/Page2">Inbox</Link>
    </div>
