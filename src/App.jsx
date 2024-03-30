import { useState } from "react";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";

function App() {

  const [isGameStarted, setisGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setisGameStarted((prev) => !prev);
  }

  return (
    <>{isGameStarted ? <GamePlay/> : <StartGame toggle = 
  {toggleGamePlay} />}</>
      
  )
}

export default App
