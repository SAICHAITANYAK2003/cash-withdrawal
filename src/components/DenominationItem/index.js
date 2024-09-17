// Write your code here
const DenominationItem = props => {
  const {denominationsdetials, updateBalance} = props
  const {value} = denominationsdetials

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
