import './index.css'

const FruitsListItem = props => {
  const {imgDetails, checkingMatch} = props
  const {thumbnailUrl, imageUrl} = imgDetails

  const onClickingImg = () => {
    checkingMatch(imageUrl)
  }

  return (
    <li className="images-li-container">
      <button onClick={onClickingImg} type="button" className="img-btn-el">
        <img
          alt="thumbnail"
          className="images-container-img"
          src={thumbnailUrl}
        />
      </button>
    </li>
  )
}

export default FruitsListItem
