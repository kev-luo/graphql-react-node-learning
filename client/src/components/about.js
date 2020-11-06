import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap';

export default function about() {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}></Col>
        <Col xs={8}>
          <Card>
            <Card.Header>About Me</Card.Header>
            <Card.Body>
              Welcome to my portfolio site! The launch of this site marks the beginning of my work towards becoming a web developer. While there's not much to look at in its current state, the plan is to add content over the duration of the coding bootcamp I'm enrolled in. All good things take time and consistent effort, and I hope to prove that in the coming months.<br/>
              A little about my background... I grew up in Austin, TX and went to college at Case Western Reserve University in Cleveland, OH, where i received a BS and Master's in Accountancy. I transitioned to a full-time role at a forensic-accounting firm, Meaden & Moore, where i worked for two and a half years. Through the daily use of Excel formulas and a little VBA, I gained an interest for coding. In my spare time I enjoy playing soccer, reading, and cycling.
              <br/>
              To view my complete portfolio, please click on the Github icon to the left. If you'd like to reach out, please click on the LinkedIn icon to the left. Alternatively, you can reach me at <a href="#">kvn.luo@gmail.com</a>. 
              <br /><br />
              <Card.Link href="https://www.linkedin.com/in/kevinluo49/">LinkedIn</Card.Link>
              <Card.Link href="https://github.com/kev-luo">Github</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={2}></Col>
      </Row>
    </Container>
  )
}
