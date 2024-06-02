import Button from '../Button/Button'
import { Dice } from './Dice/Dice'
import './MidContainer.css'

export const MidContainer = ({
  isIntro,
  setIsIntro,
  rollDice,
  diceUp,
  diceDown,
}) => {
  const handleIntroPage = () => {
    setIsIntro(true)
  }

  return (
    <div className="mid-container">
      <Button text={'Start Game'} buttonAction={handleIntroPage} />
      <div className="dice-container">
        <Dice dice={diceUp} />
        <Dice dice={diceDown} />
      </div>
      <Button text={'Roll Dice'} buttonAction={rollDice} />
      <Button text={'Hold'} />
    </div>
  )
}
