import './index.css'
import {Component} from 'react'

import FruitsNavPage from '../FruitsNavPage'
import FruitsNamesPage from '../FruitsNamesPage'
import FruitsListItem from '../FruitsListItem'
import GameOverPage from '../GameOverPage'

class FruitsMainPage extends Component {
  constructor(props) {
    super(props)
    const {imagesList} = this.props
    this.state = {
      inpTabsId: 'FRUIT',
      inpImageUrl:
        imagesList[Math.floor(Math.random() * imagesList.length)].imageUrl,
      inpScore: 0,

      setTime: 59,
    }
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState(prevState => ({
        setTime: prevState.setTime - 1,
      }))
    }, 1000)
  }

  clearTime = () => {
    clearInterval(this.timerId)
  }

  playAgain = () => {
    const {imagesList} = this.props

    this.setState({
      inpImageUrl:
        imagesList[Math.floor(Math.random() * imagesList.length)].imageUrl,
      inpScore: 0,

      setTime: 59,
    })

    this.timerId = setInterval(() => {
      this.setState(prevState => ({
        setTime: prevState.setTime - 1,
      }))
    }, 1000)
  }

  checkingMatch = url => {
    const {inpImageUrl} = this.state
    const {imagesList} = this.props
    if (url === inpImageUrl) {
      this.setState(prevState => ({
        inpImageUrl:
          imagesList[Math.floor(Math.random() * imagesList.length)].imageUrl,
        inpScore: prevState.inpScore + 1,
      }))
    } else {
      this.setState({setTime: 0})
    }
  }

  categoryWiseImg = id => {
    this.setState({inpTabsId: id})
  }

  render() {
    const {inpTabsId, inpImageUrl, inpScore, setTime} = this.state
    const {tabsList} = this.props
    const {imagesList} = this.props

    const filteredList = imagesList.filter(
      eachImg => eachImg.category === inpTabsId,
    )

    const checkTime = setTime === 0
    if (checkTime) {
      this.clearTime()
    }

    return (
      <div className="bg-container">
        <nav className="nav-bg-container">
          <FruitsNavPage setTime={setTime} inpScore={inpScore} />
        </nav>

        {!checkTime && (
          <div className="img-card">
            <img
              key={inpImageUrl}
              alt="match"
              className="display-img"
              src={inpImageUrl}
            />
            <ul className="tabsList-ul-container">
              {tabsList.map(eachItem => (
                <FruitsNamesPage
                  categoryWiseImg={this.categoryWiseImg}
                  tabIdDetails={inpTabsId}
                  key={eachItem.tabId}
                  tabDetails={eachItem}
                />
              ))}
            </ul>

            <ul className="images-list-bg-container">
              {filteredList.map(eachItem => (
                <FruitsListItem
                  checkingMatch={this.checkingMatch}
                  key={eachItem.id}
                  imgDetails={eachItem}
                />
              ))}
            </ul>
          </div>
        )}
        <ul className="gameover-ul-container">
          {checkTime && (
            <GameOverPage playAgain={this.playAgain} inpScore={inpScore} />
          )}
        </ul>
      </div>
    )
  }
}

export default FruitsMainPage
