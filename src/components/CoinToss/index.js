import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {count: 0, headCount: 0}

  onClick = () => {
    const randomNum = Math.floor(Math.random() * 2)

    this.setState({
      count: randomNum - 1,
    })
    if count === 1{
this.setState(prevSt => {headCount: prevSt.headCount +1})  
  }
  }

  render() {
    const {count} = this.state
    const image =
      count === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="container">
        <div className="card">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={image} alt="toss result" className="img" />
          <button onClick={this.onClick}>Toss Coin</button>
          <p>Total:{headCount}</p>
          <p>Heads: {headCount}</p>
          <p>Tails: {count}</p>
        </div>
      </div>
    )
  }
}

export default CoinToss
