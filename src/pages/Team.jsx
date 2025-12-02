import React from 'react'
import { team } from '../data/dummyData'
import { Card, Row, Col } from 'react-bootstrap'

function Team() {
  return (
    <div>
      <h1>Team</h1>
      <Row>
        {team.map(m => (
          <Col key={m.id} xs={12} md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{m.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{m.role}</Card.Subtitle>
                <Card.Text>{m.bio}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Team
