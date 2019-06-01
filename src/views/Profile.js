import React, { Component } from 'react';
import Description from '../components/Description'
import SocialNetwork from '../components/SocialNetwork';
import {Row, Col} from 'reactstrap'
import Achievements from '../components/Achievements'

class Profile extends Component {
    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <Row>
                <Col sm="8">
                <Description>
                </Description>
                </Col>
                <Col sm="4">
                <SocialNetwork>
                </SocialNetwork>
                </Col>
                </Row>
                <h3>Logros</h3>
                <Achievements></Achievements>
                <Achievements></Achievements>

            </div>
        );
    }
}

export default Profile;