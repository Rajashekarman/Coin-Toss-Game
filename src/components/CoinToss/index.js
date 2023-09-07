import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {count: 0}

  randomNum = Math.ceil(Math.random() * 2)

  image =
    this.randomNum === 1
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

  onClick = () => {
    // const {count} = this.state
    this.setState(prevSt => ({
      count: prevSt.count + this.randomNum,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={this.image} alt="toss result" className="img" />
          <button onClick={this.onClick}>Toss Coin</button>
          <p>Total:{count}</p>
          <p>Heads: {count}</p>
          <p>Tails: {count}</p>
        </div>
      </div>
    )
  }
}

export default CoinToss
