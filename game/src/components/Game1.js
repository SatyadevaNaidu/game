import React, { useState, useEffect } from 'react';
import Box from './box';
import Die from './Die';
import './Game.css';

var rollCount = 0;
var dayCount = 1;
var valList = [50, 0, 0, 0, 0, 0];
var modifierValue=0


const Game = () => {
  var [dieValue, setDieValue] = useState(null);

  const handleDieRoll = value => {
    setDieValue(value);
    console.log("Handle die roll",value);
    if (rollCount === 5) {
      rollCount = 0;
    }
    if (dayCount <= 10) {
      if (rollCount <= 4) {
        console.log('before if condition',value);
        if (value > valList[rollCount]) {
          value = valList[rollCount];
        }
        console.log('After if condition', value);

        valList[rollCount] = valList[rollCount] - value;
        console.log("val list1",valList);
        valList[rollCount === 0 ? 1 : rollCount + 1] += rollCount === 0 ? value + modifierValue : value;
        console.log(valList);
        rollCount = rollCount + 1;
      } else {
        dayCount += 1;
        rollCount = 0; // reset rollCount
      }
    } else {
      alert('Game Over');
    }
  };

  return (
    <div className="gamediv">
      <Box valList={valList} />
      <Die onRoll={handleDieRoll} />
      <div>
      <p style={{color:"white"}}>The value of the die is: {dieValue}</p>
      </div>
    </div>
  );
};

export default Game;