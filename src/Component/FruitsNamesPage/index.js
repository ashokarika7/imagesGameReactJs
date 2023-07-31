import './index.css'

const FruitsNamesPage = props => {
  const {tabDetails, tabIdDetails, categoryWiseImg} = props
  const {displayText, tabId} = tabDetails

  const onClickingName = () => {
    categoryWiseImg(tabId)
  }

  const getHighlighted = tabId === tabIdDetails ? 'highlight' : ''

  return (
    <li className="names-bg-container">
      <button
        onClick={onClickingName}
        type="button"
        className={`names-btn-el names-para ${getHighlighted}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default FruitsNamesPage
