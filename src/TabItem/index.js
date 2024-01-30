import './index.css'

const TabItem = props => {
  const {passTheTab, passTheFunction, isActive} = props

  const {displayText, tabId} = passTheTab

  const decorate = isActive ? 'color' : 'normal'

  const change = () => {
    passTheFunction(tabId)
  }

  return (
    <li>
      <button className={decorate} onClick={change} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
