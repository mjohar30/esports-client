import React, { Component } from 'react';
import Navbar from '../components/Navbar'
import Card from '../components/Cards'
import {Row, Col, Jumbotron, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import './Landing.css'
import { FaUser, FaUsers, FaBriefcase} from "react-icons/fa";
import overwatch from '../overwatch.png'
import Footer from '../components/Footer'

class Landing extends Component {

  state = {
    isModalOpen: false,
    modalTitle: "Registrate en la plataforma como:",
    modalBody: ""
   };

   toggle = (title, body) => {
    this.setState({
      isModalOpen: !this.state.modal,
      modalTitle: title,
      modalBody: body
    });
   };

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Jumbotron className="jumbotron text-white">
        <h1 className="display-3 "> <strong>El futuro de los eSports es aquí </strong></h1>
        <p className="lead">Siempre has querido ser un jugador profesional, ¿Pero no sabes donde postularte?</p>
        <p className="lead">Quieres formar un equipo profesional, ¿Pero no tienes contactos que les interese?</p>
        <hr className="my-2" />
        <p>Este es el lugar indicado para ti</p>
        <p className="lead">
          <div><Button color="primary" onClick={this.toggle}>Registrate ahora mismo</Button>
          <Modal isOpen={this.props.isModalOpen} toggle={this.props.toggle} className={this.props.className}>
            <ModalHeader toggle={this.props.toggle}>{this.props.modalBody}</ModalHeader>
            <ModalBody>
              Registrarse en la plataforma como: 
            </ModalBody>
            <ModalFooter className="justify-content-center">
              <Button color="primary" href="#/register">Jugador de esports</Button>{' '}
              <Button color="primary" href="#/registerTeam">Equipo de esports</Button>
            </ModalFooter>
          </Modal>
          </div>
        </p>
        <Button color="primary" onClick={this.toggle}>Inicia sesión</Button>
          <Modal isOpen={this.state.modal2} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Iniciar sesión </ModalHeader>
            <ModalBody>
              Iniciar sesión en la plataforma como: 
            </ModalBody>
            <ModalFooter className="justify-content-center">
              <Button color="primary" href="#/profile">Jugador de esports</Button>{' '}
              <Button color="primary" href="#/profileTeam">Equipo de esports</Button>
            </ModalFooter>
          </Modal>
      </Jumbotron>
        <Row>
          <Col sm="4">
            <Card icon={<FaUser/>}  title="Los mejores jugadores" text="Revisa sus estadísticas, su información personal 
            y su disponiblidad" button="Checar" link="/profile"> </Card>
          </Col>
          <Col sm="4">
            <Card icon={<FaUsers/>} title="Los mejores equipos" text="Sus logros y sus participantes estarán a la vista de todos." button="Checar"></Card>
          </Col>
          <Col sm="4">
            <Card icon={<FaBriefcase/>} title="Ofertas de empleo" text="Ya sea para un torneo casual o profesional, podrás encontrar 
            los mejores aliados" button="Próximamente"></Card>
          </Col>
            <Card title="jfjfjf"></Card>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Card icon2={<img className="overwatch" src={overwatch} title="Overwatch"></img>}  title="¡No te preocupes!" 
                button="Próximamente" text="Nosotros obtendremos tus estadísticas de los siguientes juegos" ><img src={overwatch} title="Overwatch"></img> </Card>
          </Col>
        </Row>
        <Footer/>
      </div>
    );
  }
}

export default Landing;