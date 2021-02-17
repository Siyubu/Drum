import React,{Component} from 'react'
import Buttons from './buttons'

export default class PadBank extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      let padBank;
      if (this.props.power) {
        padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
          return (
            <Buttons
              clip={padBankArr[i].url}
              clipId={padBankArr[i].id}
              keyCode={padBankArr[i].keyCode}
              keyTrigger={padBankArr[i].keyTrigger}
              power={this.props.power}
              updateDisplay={this.props.updateDisplay}
            />
          );
        });
      } else {
        padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
          return (
            <Buttons
              clip='#'
              clipId={padBankArr[i].id}
              keyCode={padBankArr[i].keyCode}
              keyTrigger={padBankArr[i].keyTrigger}
              power={this.props.power}
              updateDisplay={this.props.updateDisplay}
            />
          );
        });
      }
      return <div className='pad-bank'>{padBank}</div>;
    }
  }