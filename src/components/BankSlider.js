import React from 'react';
import { Col } from 'react-bootstrap';

/* 
  defaultValue usage reason:
    Cant use document.getElementById().defaultValue because the input
    slider is uncontrolled. The reactDOM does not update the DOM after 
    page load. Still thinks the defaultValue of the slider is 1. Use
    react's defaultValue attribute instead. 
*/
export default function BankSlider(props) {
  return (
    <Col className='center-element'>
      <div id='bank-slider-label' className='drumpad-text'>
        Bank
      </div>
      <input 
        className='bank-slider'
        type='range'
        id='bank-slider'
        name='bank-slider'
        min='0'
        max='1'
        step='1'
        disabled={props.powerStatus}
        defaultValue='0'
        onChange={props.changeAudioBank}
      />
    </Col>
  );
}