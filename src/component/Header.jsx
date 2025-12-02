import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

function Header() {
  return (
    <Navbar bg="primary" variant="dark" className="py-3" sticky="top">
      <Container className="justify-content-center">
        <Navbar.Brand className="text-center fs-5 fw-bold">LaVadami Laundry Services</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header