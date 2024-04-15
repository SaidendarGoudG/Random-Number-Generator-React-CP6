import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateRandomNum = () => {
    this.setState({number: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {number} = this.state

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">Random Number</h1>
          <p className="note">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            onClick={this.generateRandomNum}
            type="button"
          >
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
