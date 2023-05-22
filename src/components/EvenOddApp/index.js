// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increment = () => {
    const {count} = this.state
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({count: count + randomNumber})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          Count <span className="heading">{count}</span>
        </h1>
        {count % 2 === 0 ? (
          <p className="evenodd">Count is Even</p>
        ) : (
          <p className="evenodd">Count is Odd</p>
        )}
        <button className="btn" onClick={this.increment} type="button">
          Increment
        </button>
        <p className="instruction">
          *Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}
export default EvenOddApp
