import React, { useState, useEffect, useRef } from 'react';

const Game = () => {
  const [boxes, setBoxes] = useState([50, 0, 0, 0, 0, 0]);
  const [cntDice, setCntDice] = useState(0);
  const [cntDays, setCntDays] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [score, setScore] = useState(0);

  const isPausedRef = useRef(isPaused);

  const update = () => {
    document.getElementById('textbox1').value = boxes[0];
    document.getElementById('textbox2').value = boxes[1];
    document.getElementById('textbox3').value = boxes[2];
    document.getElementById('textbox4').value = boxes[3];
    document.getElementById('textbox5').value = boxes[4];
    document.getElementById('textbox6').value = boxes[5];
  };

  useEffect(() => {
    update();
  }, [boxes]);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const playGame = (duration) => {
    for (let i = 0; i < duration; i++) {
      setTimeout(() => {
        setCntDice((prev) => {
          const newCntDice = prev + 1;
          if (newCntDice === 6) {
            setCntDice(1);
            setCntDays((prev) => prev + 1);
          } else {
            setCntDice(newCntDice);
          }
        });

        if (cntDays === 10) {
          setIsPaused(true);
          setScore(boxes[5] - boxes.slice(1, 5).reduce((sum, box) => sum + box, 0));
          alert('GAME OVER');
        }

        if (!isPausedRef.current) {
          const diceValue = getRandomNo();
          gamePlay(cntDice, diceValue);
          setTimeout(() => {
            document.getElementById('dayCount').value = cntDays;
            document.getElementById('diceValue').value = diceValue;
            update();
          }, 0);
        }
      }, i * 1000);
    }
  };

  const gamePlay = (cntDice, diceValue) => {
    const index = cntDice - 1;
    const x = Math.min(boxes[index], diceValue);
    const newBoxes = [...boxes];
    newBoxes[index] -= x;
    newBoxes[index + 1] += x;
    setBoxes(newBoxes);
  };

  const getRandomNo = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  return (
    <div>
      <input type="text" id="dayCount" value="0" />
      <input type="text" id="diceValue" value="0" />
      <input type="text" id="textbox1" />
      <input type="text" id="textbox2" />
      <input type="text" id="textbox3" />
      <input type="text" id="textbox4" />
      <input type="text" id="textbox5" />
      <input type="text" id="textbox6" />

      <button id="rollBtn" onClick={() => playGame(1)}>
        Roll Dice Once
      </button>
      <button id="oneDay" onClick={() => playGame(1)}>
        Play One Day
      </button>
      <button id="tenDays" onClick={() => playGame(10)}>
        Auto Play 10 Days
      </button>
      <button id="pause" onClick={togglePause}>
        {isPaused ? 'Continue the game' : 'Pause the game'}
      </button>
      <input type="text" id="score" value={score} />
    </div>
  )
  }

  export default Game;
