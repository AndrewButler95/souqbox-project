import React, { Component } from 'react';
import './ActionButton.css';

class ActionButton extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onClickAction = this.props.onClickAction.bind(this);
      }

    render() {
        return (
            <button className="ActionButton" onClick={this.props.onClickAction}>
                <img src="" alt="" height="42" width="42"></img>
                {this.props.name}
            </button>
        );
    }
}

export default ActionButton;