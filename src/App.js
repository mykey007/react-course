import React from 'react';
import './App.css';
// import ScoreCard from './ScoreCard';
// import IconList from './IconList';
// import LottoBall from './LottoBall';
// import Lottery from './Lottery';
// import CoinContainer from './CoinContainer'
// import BoxContainer from './BoxContainer'
// import WiseSquare from './WiseSquare'
// import CopyDemo from './CopyDemo'
import ButtonList from './ButtonList'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonList/>

        {/* <Lottery title='Mini Daily' maxNum={10} maxBalls={3} /> */}
      </header>
    </div>
  );
}

export default App;
