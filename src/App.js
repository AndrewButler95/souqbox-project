import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import './Components/Actions.css';
import Orders from './Components/Orders';
import Messages from './Components/Messages';
import ActionButton from './Components/ActionButton.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { action: "none", data: [] };    
    this.getTradedGoodsData = this.getTradedGoodsData.bind(this);
  }

  getTradedGoodsData() {
    axios.get('https://reqres.in/api/users?page=2')
      .then(function (response) {
        this.setState({
          data: response.data.data
        })
      }.bind(this))
  }
  
  render() {
    return (
      <div className="App">
        <div className="ActionsHeader">Actions</div>
        <div className="Actions">
          <ActionButton name="Traded Goods" onClickAction={this.getTradedGoodsData}></ActionButton>
          <ActionButton name="Raw Materials" onClickAction={this.getTradedGoodsData}></ActionButton>
          <ActionButton name="Sundry Items" onClickAction={this.getTradedGoodsData}></ActionButton>
          <ActionButton name="Stock Check" onClickAction={this.getTradedGoodsData}></ActionButton>
          <ActionButton name="Logistics Manager" onClickAction={this.getTradedGoodsData}></ActionButton>
        </div>
        <div className="AppAlignContent">
          <Orders data={this.state.data}></Orders>
          <Messages></Messages>
        </div>
      </div>
    );
  }
}

export default App;
