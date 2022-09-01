import React from 'react'
import {Link } from "react-router-dom";
import {Nav} from 'react-bootstrap'

function Navigation() {
  return (
    <Nav className='main-menu sticky-top justify-content-center'>
    
        <Nav.Item><Nav.Link as={Link} to="/">Home</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link as={Link} to="/recipes">Recipes</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link as={Link} to="/about">About</Nav.Link></Nav.Item>

    
    </Nav>
  )
}

export default Navigation