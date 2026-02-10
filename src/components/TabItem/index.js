import './index.css'

const TabItem = props => {
  const {data, isActive, onClickChangeTab} = props
  const {tabId, displayText} = data
  const tabItemClass = isActive ? 'isActive' : 'inActive'
  const onClickTab = () => {
    onClickChangeTab(tabId)
  }
  return (
    <li>
      <button
        type="button"
        className={`tab-btn ${tabItemClass}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
