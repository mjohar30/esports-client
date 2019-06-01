import React, { Component } from 'react';
import {Row, Col} from 'reactstrap'
// import imageProfile from 'https://pbs.twimg.com/profile_images/1093776339142930436/-3IgA4Uk_400x400.jpg'
import './Description.css'

class Description extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col sm="6" md="3" className="profile">
                        <img className="imageProfile" src="https://pbs.twimg.com/profile_images/1093776339142930436/-3IgA4Uk_400x400.jpg" alt="" srcset=""/>
                    </Col>
                    <Col sm="6" md="9" >
                        <h2>Nombre del jugador</h2>
                        <h3>Gamertag</h3>
                        <h4>Principales juegos</h4>
                        <h4>País de residencia</h4>
                    </Col>
                </Row>
                <Row>
                    <Col sm="8">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti autem veniam eum eius distinctio vel. 
                        Eius modi natus et, laboriosam nobis rem officiis similique explicabo sapiente error ipsum ex temporibus.</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Description;