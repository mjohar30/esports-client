import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './Login.css'

class App extends Component {
  render() {
    return (
        <div>
        <br/>
        <br/>
        <br/>
        <Container className="login">
            <h2>Inicia sesión</h2>
            <Form className="form">
              <Col>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ejemplo@gmail.com"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword">Contraseña</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="********"
                  />
                </FormGroup>
              </Col>
              <Button>Submit</Button>
            </Form>
        </Container>
        </div>
    );
  }
}

export default App;