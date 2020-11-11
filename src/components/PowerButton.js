import React from 'react';
import { Col } from 'react-bootstrap';

export default function PowerButton(props) {
  return (
    <Col className='h-100 right-align-element'>
      <button 
        id='power-button'
        className='power-button'
        onClick={props.powerOnOff}
      >
        <img 
          src='https://i.imgur.com/vmjdNt3.jpg'
          alt='Power on/off symbol'
        />
      </button>
    </Col>
  );
}