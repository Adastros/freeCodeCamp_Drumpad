import React from 'react';
import { Col } from 'react-bootstrap';

export default function VolumeSlider(props) {
  return (
    <Col xs={7} sm={7} md={7} lg={7} xl={7}>
      <div className='h-100 left-align-element'>
        <img 
          className='volume-img'
          src='https://i.imgur.com/bNjzdCd.png' 
          alt='Sound off icon.'
        />
        <input 
          id='volume-slider'
          className='volume-slider'
          type='range'
          name='volume-slider'
          min='0'
          max='100'
          step='1'
          disabled={props.powerStatus}
          onChange={props.adjustVol}
        />
        <img
          className='volume-img'
          src='https://i.imgur.com/zNVr7I6.png' 
          alt='Full sound icon.'
        />
      </div>
    </Col>
  );
}



