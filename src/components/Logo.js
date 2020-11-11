import React from 'react';
import { Col } from 'react-bootstrap';

export default function Logo() {
  return (
    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
      <div id='drumpad-logo' className='h-100 center-element drumpad-text'>
        <i>DrumDrum<sup><i>TM</i></sup></i>
      </div>
    </Col>
  );
}