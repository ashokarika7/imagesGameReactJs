import './index.css'

const FruitsNavPage = props => {
  const {inpScore, setTime} = props
  return (
    <ul className="nav-bg-ul-container">
      <li className="nav-bg-container">
        <img
          className="nav-website-logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        />
        <div className="timer-score-container">
          <p className="nav-para-style">
            Score: <span className="nav-span-el">{inpScore}</span>
          </p>
          <img
            className="timer-img"
            alt="timer"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          />

          <p className="nav-span-el">{setTime} sec</p>
        </div>
      </li>
    </ul>
  )
}

export default FruitsNavPage
