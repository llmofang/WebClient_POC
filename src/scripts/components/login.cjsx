React = require 'react'
ReactDOM = require 'react-dom'
render = ReactDOM.render
{ Link } = require 'react-router'
{ Navbar, NavBrand, Grid, Row, Col , Button} = require 'react-bootstrap'
{LinkContainer} =  require 'react-router-bootstrap'

window.React = React
window.ReactDom = ReactDOM

module.exports = React.createClass
  render: ->
    <div>
        <p>1111111</p>
    </div>
