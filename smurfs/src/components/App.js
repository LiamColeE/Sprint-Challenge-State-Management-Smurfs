import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { addSmurf, removeSmurf, getSmurfs } from '../actions/actions'
import SmurfCard from './SmurfCard'

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
    document.querySelector("#smurfName").value = "";
    smurf.height = document.querySelector("#smurfHeight").value;
    document.querySelector("#smurfHeight").value = "";
    smurf.age = document.querySelector("#smurfAge").value;
    document.querySelector("#smurfAge").value = "";
    
    this.props.addSmurf(smurf);
  }

  removeSmurf = (e, id) => {
    this.props.removeSmurf(id);
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
        
        {this.props.state.smurfs.map(smurf => <SmurfCard key={smurf.id} id={smurf.id} smurf={smurf} removeSmurf={this.removeSmurf}/>)}
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

