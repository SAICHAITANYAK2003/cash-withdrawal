// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'
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
    const name = 'Sarah Williams'
    const icon = name.slice(0, 1)
    return (
      <div className="main-container">
        <div className="main-balance-container">
          <div className="profile-container">
            <div className="profile-icon-container">
              <p className="profile-icon">{icon}</p>
            </div>

            <h1 className="profile-name">{name}</h1>
          </div>
          <div className="balance-data-container">
            <p className="balance-text">Your Balance</p>
            <div className="balance-count-container">
              <p className="balance-count">{balance}</p>
              <p className="currency-text">in Rupees</p>
            </div>
          </div>
          <p className="withdraw-text">Withdraw</p>
          <p className="sum-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                denominationsdetials={eachItem}
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
