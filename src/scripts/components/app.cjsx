React = require 'react'
ReactDom = require 'react-dom'
{ Link } = require 'react-router'
{ Navbar, NavBrand, Grid, Row, Col } = require 'react-bootstrap'



window.React = React
window.ReactDom = ReactDom

module.exports = React.createClass
  render: ->
    <div>
      <Header />
        <Row className="body">
          <Col xs={12}><Body /></Col>
        </Row>
    </div>
