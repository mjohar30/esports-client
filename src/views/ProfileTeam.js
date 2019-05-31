import React, { Component } from 'react';
import Navbar from '../components/Navbar'
import Description from '../components/Description'
import SocialNetwork from '../components/SocialNetwork';
import {Row, Col} from 'reactstrap'
import Achievements from '../components/Achievements'
import './ProfileTeam.css'

class ProfileTeam extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <br/>
                <br/>
                <br/>
                <Row>
                    <Col sm="8">
                        <Description />
                    </Col>
                    <Col sm="4">
                        <SocialNetwork />
                    </Col>
                </Row>
                <h3>Integrantes</h3>
                <Row>
                    <Col>
                        <img className="imageMember" src="https://pbs.twimg.com/profile_images/1093776339142930436/-3IgA4Uk_400x400.jpg" alt=""/>
                        <h4>Jugador1</h4>
                    </Col>
                    <Col>
                        <img className="imageMember" src="https://pbs.twimg.com/profile_images/1132917767256940544/_NoLUtoi_400x400.jpg" alt=""/>
                        <h4>Jugador2</h4>
                    </Col>
                    <Col>
                        <img className="imageMember" src="https://pbs.twimg.com/profile_images/1120936412138934272/KwqY0mjW_400x400.jpg" alt=""/>
                        <h4>Jugador3</h4>
                    </Col>
                    <Col>
                        <img className="imageMember" src="https://pbs.twimg.com/profile_images/1133393198687166464/L09ee-eo_400x400.png" alt=""/>
                        <h4>Jugador4</h4>
                    </Col>
                </Row>
                <br/>
                <h3>Logros</h3>
                <Achievements></Achievements>
                <Achievements></Achievements>

            </div>
        );
    }
}

export default ProfileTeam;