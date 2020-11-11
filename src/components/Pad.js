import React from 'react';

export default class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    //this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
  }
  // allows user to spam drum key without waiting for audio to finish playing
  onClickHandler() {
    //If powerStatus = false -> drum machine is off; dont play audio
    this.props.playSound(this.props.audioElement.padLabel,this.props.audioElement.id);
  }
  render() {
    return(
      <button 
        type='button' 
        onClick={this.onClickHandler}
        className='drumpad'
        disabled={this.props.powerStatus}
      >
        {this.props.audioElement.padLabel}
        <audio id={this.props.audioElement.padLabel} className='clip'>
          <source 
            src={this.props.audioElement.audioFile}
            type='audio/mpeg'
          />
        </audio>
      </button>
    );
  }
}