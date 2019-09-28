import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { addSmurf, removeSmurf, getSmurfs } from '../actions/actions'

class App extends Component {
  constructor(props){
    super();
    props.getSmurfs();
  }

  addSmurf = () => { 
    let smurf = {
      name:"",
      height:"",
      age:""
    };
    smurf.name = document.querySelector("#smurfName").value;
    smurf.height = document.querySelector("#smurfHeight").value;
    smurf.age = document.querySelector("#smurfAge").value;
    
    this.props.addSmurf(smurf);
  }

  removeSmurf = () => {
    this.props.removeSmurf()
  }

  render() {
    console.log(this.props.state);
    return (
      <div className="App">
        <h2>name</h2>
        <input id="smurfName"></input>
        <h2>height</h2>
        <input id="smurfHeight"></input>
        <h2>age</h2>
        <input id="smurfAge"></input>
        <button style={{display: "block", marginLeft: "auto", marginRight: "auto"}} onClick={this.addSmurf}>Submit</button>
        
        {this.props.state.smurfs.map(smurf => <h1>{smurf.name}<button onClick={this.removeSmurf}>X</button></h1>)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, { addSmurf, removeSmurf, getSmurfs })(App)

