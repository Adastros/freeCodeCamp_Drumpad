import React from 'react';
import { Col } from 'react-bootstrap';

export default function Display(props) {
  return (
    <Col className='left-align-element'
    xs={6} sm={6} md={6} lg={6} xl={6}
    >
      <div id='display' className='action-display'>
        {props.action}
      </div>
    </Col>
  );
}