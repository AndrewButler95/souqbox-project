import React, {Component} from 'react';
import './App.css';
import Orders from './Components/Orders';
import Actions from './Components/Actions';
import Messages from './Components/Messages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {action:"none"};
    this.updateSelection = this.updateSelection.bind(this);
  }

  updateSelection(asdf){
    this.setState({action:asdf})
    }

render(){
  
  return (
    <div className="App">
      <Actions updateSelection={this.updateSelection} ></Actions>
      <div className="AppAlignContent">
      <Orders action={this.state.action}></Orders>
      <Messages></Messages>
      </div>
    </div>
  );
}}

export default App;
