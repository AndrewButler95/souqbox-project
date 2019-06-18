import React from 'react';
import './ActionButton.css';

function ActionButton(props) {
    return (
        <button className="ActionButton" >
            <img src="" alt="" height="42" width="42"></img> 
            {props.name} 
        </button>
    );
}

export default ActionButton;