import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'

const baseURL = `${process.env.REACT_APP_BASE_URL}/users/register`

class Register extends Component {

  state = {
    bigData: null,
  }


  handleChange = event => {
    console.log(this.state)
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }
 
  handleSubmit= event => {
      const doctor = event.currentTarget();
      
      if (doctor.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
      }
      
      this.setState({ validated: true });
      // event.preventDefault();
      const regisDoctor = {
        name: this.state.regisname,
        country: this.state.regiscountry,
        state: this.state.regisstate,
        email: this.state.regisemail,
        password: this.state.regispass,
        game: this.state.regisgame,
        platform: this.state.regisplatform,
        gamertag: this.state.regisgamertag
      }
      
      
      
      console.log("esto enviaste:", regisDoctor)
      axios({
        method: 'post',
        baseURL,
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
        data: regisDoctor
      })
      .then(res => {
        console.log(res.data)
        return res.data
      })
    }
  
  render() {
        return (
          <div>
            <Navbar></Navbar>
            <br/>
            <br/>
            <br/>
            <div className="form">
            <Form>
              <FormGroup>
                <Col sm="5">
                <Label for="name">Nombre del jugador</Label>
                <Input name="regisname" onChange={this.handleChange} xs="5" type="text" id="name" placeholder="Nombre del jugador" />
                </Col>
              </FormGroup>
              <FormGroup>
                
                <Col sm="5">
                <Label for="paisOrigen">País de origen</Label>
                  <Input name="regiscountry" onChange={this.handleChange} type="select" id="paisOrigen">
                    <option>México</option>
                  </Input>
                </Col>
                <Col sm="5">
                <Label for="estado">Estado</Label>
                  <Input name="regisstate" onChange={this.handleChange} type="select" id="estado">
                    <option>Ciudad de México</option>
                  </Input>
                </Col>
                
              </FormGroup>
              <FormGroup>
                <Col sm="5">
                <Label for="email">Correo electrómico</Label>
                <Input name="regisemail" onChange={this.handleChange} type="email" id="email" placeholder="juan@esports.com" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm="5">
                <Label for="password">Password</Label>
                <Input name="regispass" onChange={this.handleChange} type="password" id="password" placeholder="****" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm="5">
                <Label for="seleccionJuego">Seleccionar juego</Label>
                  <Input name="regisgame" onChange={this.handleChange} type="select" id="seleccionJuego">
                    <option>Overwatch</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm="5">
                <Label for="exampleSelect">Plataforma en la que juega</Label>
                  <Input name="regisplatform" onChange={this.handleChange} type="select" id="exampleSelect">
                    <option>Ciudad de México</option>
                  </Input>
                <Label for="gamertag">Gamertag de esa plataforma</Label>
                <Input name="regisgamertag" onChange={this.handleChange} type="text"x id="gamertag" placeholder="gamertag">
                </Input>
                </Col>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
            </div>
            <Footer/>
          </div>
        );
    }
}

export default Register;