import React from 'react';
import Display from './Display.js';
import Logo from './Logo.js';
import PowerButton from './PowerButton.js';
import VolumeSlider from './VolumeSlider.js';
import BankSlider from './BankSlider.js';
import { Container, Row } from 'react-bootstrap';

/*
Displays actions performed on drumpad including power on/off,
drumpad button pressed, and volume.
*/
export default function UserControls(props) {
  return (
    <Container className='h-100'>
      <Row className='h-50'>
        <Display action={props.action} />
        <Logo />
        <PowerButton powerOnOff={props.powerOnOff}/>
      </Row>
      <Row className='h-50'>
        <VolumeSlider 
          powerStatus={props.powerStatus}
          adjustVol={props.adjustVol}
        />
        <BankSlider 
          powerStatus={props.powerStatus}
          changeAudioBank={props.changeAudioBank}
        />
      </Row>
    </Container>
  );
} 