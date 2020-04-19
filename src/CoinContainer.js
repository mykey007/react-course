import React, { Component } from 'react'
import { choice } from './helpers'
import Coin from './Coin'
import './Coin.css'

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            {side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
            {side: 'tails', imgSrc: 'https://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=b9c440a9392cd24645b3119217e16e86ae8d556e-1587339527-0-Aa2CoHcmBOBESDGVec3RobIAqoH2T6wM1gy5v8K0bKgW6kJ86WtdtSwr5uLRrb21kB9TJWi9JLM9BVbQ4n4lNZpqIS0kAOCpLeLH9S6MxRL4iKVNDiQJ28k_l4QrVSOyFTK-wsRvkw-pn8xGv5w4DtiDliPQvIauyepBmfebdleZycrJVwDkZnQnjKjJNv5QUUxJ-cRhc335Q5It3u4v2bHA5tsC3CAaNn4d8r8wMvsvD9rdMUk62fhQIbhLsJf5UFO3kqzKPnBaaQcFO6x2bo2RJ6xJka2jc2apwwvkPQ3J0b4SaDfrMlVzbvWPxeGXYQ'}
        ]
    }
    constructor(props) {
        super(props)
        this.state = {
            nFlips: 0,
            nHeads: 0,
            nTails: 0,
            curCoin: null,
        } 
        this.handleClick = this.handleClick.bind(this)
    }
    flipCoin() {
        const newCoin = choice(this.props.coins)
        this.setState(st =>{
            // from here to...
            // let newState = {
            //     ...st,
            //     curCoin: newCoin,
            //     nFlips: st.nFlips + 1
            // }
            // if(newCoin.side === 'heads') {
            //     newState.nHeads += 1
            // } else {
            //     newState.nTails += 1
            // }
            // return newState
            // ... here can be done in a ternary too
            return {
                curCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === 'heads' ? 1: 0),
                nTails: st.nTails + (newCoin.side === 'tails' ? 1: 0)
            }
          })
    }

    handleClick(e) {
        this.flipCoin()
    }

    render() {
        return(
            <div className='coinContainer'>
                <h2>Let's Flip a Coin</h2>
                <button onClick={this.handleClick}>Flip Me!</button>
                {this.state.curCoin && <Coin info={this.state.curCoin} />}
                <p>Out of {this.state.nFlips} flips you have {this.state.nHeads} heads and {this.state.nTails} tails.</p>
            </div>
        )
    }
}

export default CoinContainer