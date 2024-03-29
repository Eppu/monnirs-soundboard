import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../action_creators";
import { Button } from "./button";
import { Volumeslider } from "./volumeslider";

require("../assets/css/main.scss");

const BUTTON_SIZE = 120;

export class StandaloneSoundboard extends Component {
  componentDidMount() {
    this.props.loadConfig();
  }

  render() {
    let content;
    if (this.props.fetching) {
      content = this.getLoadingMessage();
    } else {
      content = this.getSoundboard();
    }

    return content;
  }

  getLoadingMessage = () => {
    return (
      <div className="fullscreenmessage">
        <h1>Loading...</h1>
      </div>
    );
  }

  getSoundboard = () => {
    return (
      <div>
        <div class="heading">
          <img src="favicon.png" alt="monniLu" class="title-img"></img><h1 className="title">MonniRS soundboard</h1>
        </div>
        <section
          id="soundboard"
          style={this.getSoundboardStyles()}
        >
          {this.props.config.sounds.map((sound) => {
            return (<Button
              file={sound.file}
              key={sound.file}
              title={sound.title}
              button_color={this.props.config.colors.button}
              playing_color={this.props.config.colors.playing}
            />);
          })}
        </section>
        <Volumeslider />
      </div>
    );
  }

  getSoundboardStyles = () => {
    let screenRes = document.querySelector("html").clientWidth / document.querySelector("html").clientHeight,
      x = 1,
      y = 1;

    while ((x * y) < this.props.config.sounds.length) {
      var solRes = x / y;

      if (solRes < screenRes) {
        x++;
      } else {
        y++;
      }
    }

    let boardWidth = (BUTTON_SIZE + 30) * x,
      boardHeight = (BUTTON_SIZE + 30) * y;

    return {
      "width": boardWidth,
      "height": boardHeight,
      "marginLeft": "-" + boardWidth / 2 + "px",
      "marginTop": "-" + boardHeight / 2 + "px"
    };
  }
}

export const Soundboard = connect(
  state => state,
  actionCreators
)(StandaloneSoundboard);
