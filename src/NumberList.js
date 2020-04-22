import React, { Component } from "react";
import NumberItem from "./NumberItem";

class NumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5] };
    //bind it once and call that in the render
    this.remove = this.remove.bind(this)
  }

  remove(num) {
    this.setState(st => ({
      nums: st.nums.filter(n => n !== num)
    }));
  }

  render() {
    let nums = this.state.nums.map(n => (
        // pass in the reference to remove as-is, no binding here, no new functions
      <NumberItem value={n} remove={this.remove} />
    ));
    return (
      <div>
        <h1>First Number List</h1>
        <ul>{nums}</ul>
      </div>
    );
  }
}

export default NumberList;
