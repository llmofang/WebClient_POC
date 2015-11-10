React = require 'react'
ReactDom = require 'react-dom'
{
  Col, CollapsibleNav
  ButtonToolbar, ButtonGroup, Button
  Glyphicon
  Input
  Nav, Navbar, NavDropdown, NavBrand, NavItem,  MenuItem,
} = require 'react-bootstrap'
{ Link } = require 'react-router'
{ LinkContainer } = require 'react-router-bootstrap'


window.React = React
window.ReactDom = ReactDom

module.exports = React.createClass
  render: ->
      searchButton = <Button><Glyphicon glyph="search" /></Button>
      <Navbar inverse fixedTop={yes} toggleNavKey={0}>
        <CollapsibleNav eventKey={0}>
          <Nav navbar>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav navbar right>
            <div className="navbar-form">
              <Input type="text" buttonAfter={searchButton} />
            </div>
          </Nav>
        </CollapsibleNav>
      </Navbar>
