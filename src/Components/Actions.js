import React from 'react';
import './Actions.css';
import ActionButton from './ActionButton.js';

function Actions() {
  return (
    <React.Fragment>
    <div className="ActionsHeader">Actions</div>
    <div className="Actions">
     
        <ActionButton name="Traded Goods"></ActionButton>
        <ActionButton name="Raw Materials"></ActionButton>
        <ActionButton name="Sundry Items"></ActionButton>
        <ActionButton name="Stock Check"></ActionButton>
        <ActionButton name="Logistics Manager"></ActionButton>
    </div>
    </React.Fragment>
  );
}

export default Actions;