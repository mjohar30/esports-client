import React, { Component } from 'react';
import {Media} from 'reactstrap'
import trophy from '../images/trofeo.png'
import './Achievements.css'


class Achievements extends Component {
    render() {
        return (
            <div>
                <Media>
                    <Media left>
                        <img className="trophy" src={trophy} alt=""/>
                    </Media>
                    <Media body>
                        <Media heading>
                        Media heading
                        </Media>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </Media>
                </Media>
            </div>
        );
    }
}

export default Achievements;