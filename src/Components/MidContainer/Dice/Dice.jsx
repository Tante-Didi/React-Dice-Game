import './Dice.css'

export const Dice = ({ dice }) => {
  return (
    <div className="dice-wrap">
      <img
        id="dice2"
        src={`/assets/dice${dice}.png`}
        alt="Dice 2"
        className="dice-img"
      />
    </div>
  )
}
