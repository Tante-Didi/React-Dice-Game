import './Intro.css'

export const Intro = ({ isIntro, setIsIntro }) => {
  return (
    <>
      {isIntro && (
        <div className="intro-container">
          <div className="to-the left">
            <h3>Game-Instructions</h3>
            <ul>
              <li>
                In your turn-roll the dice(at least once) and accumulate the
                result in "current"
              </li>
              <li>
                You can roll again or click "hold" to save thr points from
                "Current" and end the turn.
              </li>
              <li>
                Note! If you get 6 -6 - you will lose all points from "current"
                and the turn will go to your opponent
              </li>
              <li>
                If you manage to reach exactly the target score - you WIN ! If
                you passed it -you LOOSE !
              </li>
            </ul>
          </div>
          <div className="up">
            <h3>Please select a target score</h3>
            <input
              type="number"
              id="numberInput"
              name="numberInput"
              min={0}
              max={100}
              step={1}
            />
            <button
              className="box-one"
              onClick={() => {
                setIsIntro(false)
              }}
            >
              START GAME
            </button>
          </div>
        </div>
      )}
    </>
  )
}
