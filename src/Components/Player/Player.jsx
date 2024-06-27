import './Player.css'

export const Player = ({ style }) => {
  return (
    <div className={`player-containers ${style}`}>
      <>
        <div className="two">
          <div className="player-container">
            <div className="player-up">
              <h2 className="h2-top">PLAYER one</h2>
              <p className="p-num-top">0</p>
            </div>
          </div>
          <div className="player-container">
            <div className="player-bottom">
              <p className="p-current">CURRENT</p>
              <p className="p-num-bottom">0</p>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}
