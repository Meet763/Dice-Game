import styled from "styled-components";
import NumberSelector from "./NumberSelector"
import Roledice from "./Roledice";
import TotalScore from "./TotalScore"
import { Button, OutlineButton } from "../styled/Button";
import { useState } from 'react'
import Rule from "./Rule";


const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max-min) + min);
  }

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <Maincontainer>
      <div className="top_section">
     <TotalScore score={score}/>
     <NumberSelector
     error={error}
     setError={setError}
     selectedNumber={selectedNumber}
     setSelectedNumber={setSelectedNumber}
     />
     </div>
     <Roledice currentDice={currentDice} roleDice={roleDice}/>
     <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
        </div>

        {showRules && <Rule/>}
    </Maincontainer>
  )
}

export default GamePlay

const Maincontainer = styled.main`
    padding-top: 70px;
  .top_section{
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
