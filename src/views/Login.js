// import React, { Component } from 'react';
// import axios from 'axios'
// const baseURL = `${process.env.REACT_APP_BASE_URL}/users/login`
import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './Login.css'
import Navbar from '../components/Navbar'

class App extends Component {

    // state = {
    //     bigData: null,
    // }
    
    
    // handleChange = event => {
    //     console.log(this.state)
    //     this.setState(
    //         {
    //             ...this.state,
    //             [event.target.name]: event.target.value
    //         }
    //     );
    // }
    // handleSubmit = (event) => {
    //   event.preventDefault();
      
      
    //   const user = {
    //     email: this.state.logmail,
    //     password: this.state.logpass
    //   }
    //   console.log('esto es', doctor);
      
    //   axios({
    //     method: 'post',
    //     baseURL,
    //     headers: {'Content-Type': 'application/json'},
    //     withCredentials: true,
    //     data: user
    //   })
    //   .then(res => {
    //     console.log(res.data)
    //     return res.data
    //   })
    // }

  render() {
    return (
        <div>
        <Navbar/>
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

    // axios({
    //     method: 'post',
    //     baseURL,
    //     headers: {'Content-Type': 'application/json'},
    //     withCredentials: true,
    //     data: doctor
    //   })
    //   .then(res => {
    //     console.log(res.data)
    //     return res.data
    //   })