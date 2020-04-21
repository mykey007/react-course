import React, { Component } from "react";
import "./WiseSquare.css";

class WiseSquare extends Component {
  dispenseWisdom() {
    let messages = [ 
        'The secret of change is to focus all your energy not on fighting the old but on building the new.',
        'Always deliver more than expected.',
        'If your actions inspire others to dream more, learn more, do more and become more, you are a leader.',
        'There’s nothing wrong with staying small. You can do big things with a small team.',
    ];
    let rIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[rIndex]);
  }

  render() {
    return (
      <div className="WiseSquare"
           onMouseEnter={this.dispenseWisdom}>
        😃
      </div>
    );
  }
}

export default WiseSquare;