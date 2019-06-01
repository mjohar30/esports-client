import React, { Component } from 'react';
import ERROR from '../images/gameover.jpg'
import './Error.css'

class Error extends Component {
    render() {
        return (
            <div>
                
                <img className="error" src={ERROR} alt=""/>
            </div>
        );
    }
}

export default Error;