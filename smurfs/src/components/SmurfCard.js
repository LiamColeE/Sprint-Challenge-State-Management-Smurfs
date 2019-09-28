import React, { Component } from "react"
import "./App.css";
import { Card, Icon, Image, Button } from 'semantic-ui-react'

class SmurfCard extends Component {
  constructor(props){
    super();
  }

  removeSmurf = (e, id) => {
      this.props.removeSmurf(e,this.props.id)
  }

  render() {
    return (
        <Card centered="true">
            <Card.Header as="h1"> {this.props.smurf.name} </Card.Header>
            <Card.Content>
                <Card.Meta > Height: {this.props.smurf.height} </Card.Meta>
                <Card.Meta > Age: {this.props.smurf.age} </Card.Meta>
            </Card.Content>
            <button onClick={this.removeSmurf}>Execute</button>
        </Card>
    )
  }
}

export default SmurfCard;
