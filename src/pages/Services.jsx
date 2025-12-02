import React from 'react'
import { services } from '../data/dummyData'
import { Card, Row, Col } from 'react-bootstrap'

function Services() {
  return (
    <div>
      <h1>Services</h1>
      <Row>
        {services.map(s => (
          <Col key={s.id} xs={12} md={6} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{s.title}</Card.Title>
                <Card.Text>{s.details}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Services
