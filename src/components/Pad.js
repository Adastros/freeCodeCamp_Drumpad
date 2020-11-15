import React from 'react';

export default class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  // Allows user to spam drum key without waiting for audio to finish playing
  onClickHandler() {
    //If powerStatus = false -> drum machine is off; dont play audio
    this.props.playSound(this.props.audioElement.padLabel,this.props.audioElement.id);
  }
  render() {
    return(
      <button 
        id={this.props.audioElement.id}
        className='drum-pad'
        type='button' 
        onClick={this.onClickHandler}
        disabled={this.props.powerStatus}
      >
        {this.props.audioElement.padLabel}
        <audio 
          id={this.props.audioElement.padLabel} 
          className='clip' 
          src={this.props.audioElement.audioFile}
        >
        </audio>
      </button>
    );
  }
}