import React from 'react'
import { Form, Button } from 'react-bootstrap'

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>If you'd like a quote or more info, please fill out the form below or email hello@greensprout.example</p>
      <Form>
        <Form.Group className="mb-3" controlId="contactName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="you@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
        <Button variant="primary" type="submit">Send</Button>
      </Form>
    </div>
  )
}

export default Contact
