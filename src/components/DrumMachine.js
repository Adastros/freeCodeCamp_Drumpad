import React from "react";
import DrumPads from "./DrumPads.js";
import UserControls from "./UserControls.js";
import { Container, Row } from "react-bootstrap";
import { audioBanks } from "../BankData/audioBanks.js";

export default class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: "Press a Pad!",
      powerStatus: false, // false = Power On
      audioBank: audioBanks.heaterBank
    };
    this.playSound = this.playSound.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.adjustVol = this.adjustVol.bind(this);
    this.powerOnOff = this.powerOnOff.bind(this);
    this.changeAudioBank = this.changeAudioBank.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
    // Set audio volume to 50% just after page load
    this.adjustVol(0, 50);
  }
  componentDidUpdate(prevProps, prevState) {
    //console.log(prevState.audioBankChangeFlag);
    /* 
      Arrays in Javascript are objects. Comparing using the equality
      operator compares the object reference in memory. In this case,
      I will use because I only need to know if the objects are different. 
      In other situations, its better to iterate through to determine if 
      equal. 
    */
    if (prevState.audioBank !== this.state.audioBank) {
      //console.log(document.getElementById('volume-slider').value);;
      this.adjustVol(0, document.getElementById("volume-slider").value);
    }
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }
  // Event.keyCode depreciated. Event.key returns a string of the physical
  // representation. Otherwise, Event.key returns a pre-defined value.
  // Will play audio with upper and lower case key press.
  handleKeyDown(event) {
    //console.log('key pressed')
    //console.log(event.key);
    if (!this.state.powerStatus) {
      for (let i = 0; i < this.state.audioBank.length; i++) {
        if (event.key.toUpperCase() === this.state.audioBank[i].padLabel) {
          this.playSound(
            this.state.audioBank[i].padLabel,
            this.state.audioBank[i].id
          );
        }
      }
    }
  }
  playSound(padId, audioId) {
    //console.log(padId);
    let audioFile = document.getElementById(padId);
    // allows user to spam SAME drum key without waiting for audio to finish playing
    // Does not stop another audio clip from playing.
    audioFile.currentTime = 0;
    audioFile.play();
    this.setState({
      action: audioId
    });
  }
  stopSound() {
    this.state.audioBank.forEach((audioObj) => {
      let audioFile = document.getElementById(audioObj.padLabel);
      audioFile.pause();
      audioFile.currentTime = 0;
    });
  }
  // Adjusts volume for all drumpad audio and displays volume percentage.
  // powerOrBankEvent is used when user changes banks or turns power off
  adjustVol(event, powerOrBankEvent) {
    let adjustVolTo = 0;
    if (event) {
      adjustVolTo = event.target.value;
      this.setState({
        action: "Volume: " + event.target.value + "%"
      });
    } else if (powerOrBankEvent) {
      adjustVolTo = powerOrBankEvent;
    } else {
      console.log("No Event or customEvent detected!");
    }
    this.state.audioBank.forEach((audioObj) => {
      let audioFile = document.getElementById(audioObj.padLabel);
      audioFile.volume = adjustVolTo / 100;
    });
  }
  // Input range values are DOM strings.
  changeAudioBank(event) {
    if (event.target.value === "1") {
      this.setState({
        action: "AniBank",
        audioBank: audioBanks.aniBank
      });
    } else {
      this.setState({
        action: "Heater Bank",
        audioBank: audioBanks.heaterBank
      });
    }
  }
  // powerStatus = false -> Disables drumpads, clears display, and
  // darkens elements on drum machine to simulate turning it off.
  powerOnOff() {
    if (this.state.powerStatus) {
      this.setState({
        action: "Press a Pad!",
        powerStatus: !this.state.powerStatus
      });
      document.getElementById("display").style.backgroundColor = "#EEEEEE";
      document.getElementById("power-button").style.filter = "brightness(1)";
    } else {
      this.setState({
        action: "",
        powerStatus: !this.state.powerStatus
      });
      this.stopSound();
      document.getElementById("display").style.backgroundColor = "#666666";
      document.getElementById("power-button").style.filter = "brightness(0.5)";
    }
  }
  render() {
    return (
      <Container className="h-100">
        <Row className="h-25">
          <UserControls
            action={this.state.action}
            adjustVol={this.adjustVol}
            powerStatus={this.state.powerStatus}
            powerOnOff={this.powerOnOff}
            changeAudioBank={this.changeAudioBank}
          />
        </Row>
        <Row className="h-75">
          <DrumPads
            audioBank={this.state.audioBank}
            playSound={this.playSound}
            powerStatus={this.state.powerStatus}
          />
        </Row>
      </Container>
    );
  }
}
