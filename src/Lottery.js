import React, { Component } from "react";
import LottoBall from './LottoBall'
import './Lottery.css'

class Lottery extends Component {
  static defaultProps = {
      title: 'Lotto',
      maxBalls: 6,
      maxNum: 40,
  };
  constructor(props) {
    super(props);
    // using empty nums would give us a blank intial page
    // this.state = { nums: [] };
    // set number of balls to the maxNum total
    this.state = {nums: Array.from({ length: this.props.maxBalls })}
    this.handleClick = this.handleClick.bind(this);
  }
  generate() {
    // pick random numbers 
    this.setState(curState => ({
        nums: curState.nums.map(
            n => Math.floor(Math.random() * this.props.maxNum) + 1
        )
    }))
    
  }

  handleClick(){
      this.generate()
  }

  render() {
      return (
          <section className='Lottery'>
              <h1>{this.props.title}</h1>
              <div>
                  {this.state.nums.map(n => (
                    <LottoBall num={n}/>
                  ))}
              </div>
              <button onClick={this.handleClick}>Play Game</button>
          </section>
      )
  }
}

export default Lottery