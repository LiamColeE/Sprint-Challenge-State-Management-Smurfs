import React, { Component } from "react"
import "./App.css";
import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { removeSmurf } from '../actions/actions'

class SmurfCard extends Component {
  constructor(props){
    super();
  }

  removeSmurf = (e, id) => {
      this.props.removeSmurf(this.props.id)
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

const mapStateToProps = state => {
    return {
      state
    }
  }
  
export default connect(mapStateToProps, { removeSmurf })(SmurfCard)
