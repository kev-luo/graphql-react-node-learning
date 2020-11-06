import React from 'react'
import { Container, Form, Card, Button, Row, Col } from 'react-bootstrap';

function contact() {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}></Col>
        <Col xs={8}>
          <Card>
            <Card.Header> Contact</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="John Smith" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="johnsmith@mail.com" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" placeholder="Textarea"></Form.Control>
                </Form.Group>
                  <Button>Submit</Button>
                  <Button>Cancel</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={2}></Col>
      </Row>
          
    </Container>
  )
}

export default contact