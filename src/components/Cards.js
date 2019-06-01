import React, { Component } from 'react';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Cards.css'

class Cards extends Component {
    render(){
    return (
    <div>
      <Card>
        <div className="icon">
          {this.props.icon}
        </div>
        <CardBody className="text-center">
          <CardTitle>{this.props.title}</CardTitle>
          <CardSubtitle>{this.props.subtitle}</CardSubtitle>
          <CardText>{this.props.text}</CardText>
          <Button href={this.props.link}>{this.props.button}</Button>
        </CardBody>
        <div className="images">
          {this.props.icon2}
          {this.props.icon3}
          {this.props.icon4}
          {this.props.icon5}
          {this.props.icon6}
        </div>
      </Card>
    </div>
  );
}
}

export default Cards;