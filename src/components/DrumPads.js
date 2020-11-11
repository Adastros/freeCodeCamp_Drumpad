import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Pad from './Pad.js';

// Displays pads
export default function DrumPads(props) {
  //console.log(this.props.audioBank[0].id);
  const padArr = props.audioBank.map((audioElement) => {
    //console.log(audioElement);
    return (
      <Col key={audioElement.id + 'Col'} className='h-100 center-element'>
        <Pad
          id={audioElement.id}
          key={audioElement.id}
          audioElement={audioElement}
          playSound={props.playSound}
          powerStatus={props.powerStatus}
        />
      </Col>
    );
  });
  /*
    Javascript does not support multidimensional arrays natively.
    Need to create an "array of arrays".
    Generates a 2nd order array of Pads: 3 Pads in an Array within 
    another Array. To help with rendering of react components 
    using react-bootstrap's row and col layout. 
  */
  function organizePads(padArr) {
    let i = 0,
      j = 0,
      k = 0,
      padRowColArr = [[]];
    for (i; i < padArr.length; i++) {
      if (k > 2) {
        j++;
        k = 0;
        padRowColArr[j] = []; // initialize element in order to operate on 2nd order array
      }
      padRowColArr[j][k] = padArr[i];
      k++;
    }
    //console.log('padRowColArr: ' + padRowColArr);
    return padRowColArr;
  }
  // Renders 3 Pads for each of the 3 rows
  function renderPadLayout(padArr) {
    return organizePads(padArr).map((rowOfPads, i) => {
      //console.log(i + ": " + row);
      return (
        <Row key={'rowOfPads' + i} className='h-33' noGutters='true'>
          {rowOfPads}
        </Row>
      );
    });
  }
  // <></> is shorthand for <React.fragment>. <></> does not have any attributes
  // If looping through an array of fragments, use <React.fragment> to use the
  // key attribute.
  return (
    <Col className='h-100'>
      {renderPadLayout(padArr)}
    </Col>
  );
}
