// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const personName = 'Sarah Williams'
    const initial = personName.slice(0, 1)

    return (
      <div className="main-bg-container">
        <div className="cash-withdrawal-container">
          <div className="user-details-container">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="personName">{personName}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="main-Balance">
              {balance}
              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal