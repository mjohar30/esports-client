import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import axios from 'axios'

class RegisterTeam extends Component {

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
          const user = event.currentTarget();
          
          if (user.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
          }
          
          this.setState({ validated: true });
          // event.preventDefault();
          const regisUser = {
            name: this.state.regisname,
            country: this.state.regiscountry,
            state: this.state.regisstate,
            email: this.state.regisemail,
            password: this.state.regispass,
            game: this.state.regisgame,
            platform: this.state.regisplatform,
            gamertag: this.state.regisgamertag
          }
          
          
          
          console.log("esto enviaste:", regisUser)
          axios({
            method: 'post',
            baseURL: `${process.env.REACT_APP_BASE_URL}/users/register`,
            headers: {'Content-Type': 'application/json'},
            withCredentials: true,
            data: regisUser
          })
          .then(res => {
            console.log(res.data)
            return res.data
          })
        }

    render() {
        return (
            <div>
            <br/>
            <br/>
            <br/>
            <div className="form">
            <Form onSubmit= {this.handleSubmit}>
              <FormGroup>
                <Col sm="5">
                <Label for="name">Nombre del equipo</Label>
                <Input name="regisname" onChange={this.handleChange} xs="5" type="text" id="name" placeholder="Nombre del equipo" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm="5">
                <Label for="paisOrigen">País de origen</Label>
                  <Input name="regiscountry" onChange={this.handleChange} type="select" id="paisOrigen">
                    <option>México</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm="5">
                <Label for="email">Correo electrónico</Label>
                <Input name="regisemail" onChange={this.handleChange} type="email" id="email" placeholder="juan@esports.com" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm="5">
                <Label for="password">Contraseña</Label>
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
                </Col>
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
            </div>
          </div>
        );
    }
}

export default RegisterTeam;