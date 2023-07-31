import './index.css'

const GameOverPage = props => {
  const {inpScore, playAgain} = props

  const onClickingPlayAgain = () => {
    playAgain()
  }

  return (
    <li className="gameover-bg-container">
      <img
        className="tropy-img"
        alt="trophy"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
      />

      <p className="gameover-para">Your Score</p>
      <p className="gameover-score">{inpScore}</p>
      <button
        onClick={onClickingPlayAgain}
        type="button"
        className="playagain-btn"
      >
        <img
          className="reset-btn-img"
          alt="reset"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
        />
        PLAY AGAIN
      </button>
    </li>
  )
}

export default GameOverPage
