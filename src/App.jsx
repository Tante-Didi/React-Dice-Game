import { MidContainer } from './Components/MidContainer/MidContainer'
import { Player } from './Components/Player/Player'
import { useState } from 'react'
import { Intro } from './Components/Intro/Intro'

import './App.css'
import './reset.css'

function App() {
  const [isIntro, setIsIntro] = useState(true)
  const [diceUp, setDiceUp] = useState(1)
  const [diceDown, setDiceDown] = useState(1)

  const randomNumber = () => Math.floor(Math.random() * 6) + 1

  const rollDice = () => {
    const diceOne = randomNumber()
    const diceTwo = randomNumber()
    setDiceUp(diceOne)
    setDiceDown(diceTwo)
  }

  return (
    <div className="global-container">
      <Intro isIntro={isIntro} setIsIntro={setIsIntro} />
      <Player style={`player-1`} />
      <MidContainer
        isIntro={isIntro}
        setIsIntro={setIsIntro}
        rollDice={rollDice}
        diceUp={diceUp}
        diceDown={diceDown}
      />
      <Player style={`player-2`} />
    </div>
  )
}

export default App

//Input button - Get score
// Roll dice Random number function
//Hold Button Function
//Check win Function
