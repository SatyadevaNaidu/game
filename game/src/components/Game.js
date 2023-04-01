/*
import React, { Component } from 'react';
import { Card} from 'react-bootstrap';
import history from '../history';
import './Game.css'


export default class Game extends Component {
    render(){
        return(
            <div class="container">
  <div class="box">
    <div class="value-box">Value 1</div>
  </div>
  <div class="box">
    <div class="value-box">Value 2</div>
  </div>
  <div class="box">
    <div class="value-box">Value 3</div>
  </div>
  <div class="box">
    <div class="value-box">Value 4</div>
  </div>
  <div class="box">
    <div class="value-box">Value 5</div>
  </div>
  <div class="box">
    <div class="value-box">Value 6</div>
  </div>
  <div class="buttons">
    <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
    <button>Button 4</button>
    <button>Button 5</button>
  </div>
  <div class="value-box-container">
    <div class="value-box">Value A</div>
    <div class="value-box">Value B</div>
    <div class="value-box">Value C</div>
  </div>
</div>

        );
    }

}
*/

import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './Game.css';

var rollCount = 0;
var dayCount = 1;
var valList = [50, 0, 0, 0, 0, 0];

export default class Game extends Component {

    rollDice = () => {
        const diceValue = Math.floor(Math.random() * 6) + 1;
        const diceElement = document.getElementById("diceValue");
        diceElement.classList.add("roll-animation");
        setTimeout(() => {
          diceElement.classList.remove("roll-animation");
        }, 1000);
        diceElement.value = diceValue;
      }

  render() {
    return (
      <div className="main">
        <br></br>
        <h1>The Goal Game</h1>
        <div>
          <div className="team">
            <h2>Backlog ></h2>
            <p>Value: <input className='inp' type="text" id="textbox1" /></p>
          </div>
          <div className="team">
            <h2>Refinement ></h2>
            <p>Value: <input className='inp' type="text" id="textbox2" /></p>
          </div>
          <div className="team">
            <h2>Design ></h2>
            <p>Value: <input className='inp' type="text" id="textbox3" /></p>
          </div>
          <div className="team">
            <h2>Development ></h2>
            <p>Value: <input className='inp' type="text" id="textbox4" /></p>
          </div>
          <div className="team">
            <h2>Q/A ></h2>
            <p>Value: <input className='inp' type="text" id="textbox5" /></p>
          </div>
          <div className="team">
            <h2>Production</h2>
            <p>Value: <input className='inp' type="text" id="textbox6" /></p>
          </div>
          <button id="rollBtn" onClick={this.rollDice}>Roll Dice</button>
          <button id="oneDay">Play for 1 Day</button>
          <button id="tenDays">Play for 10 Days</button>
          <button id="restart">Play Again</button>
          <button id="pause">Pause the game</button>
        </div>
        <div className="team">
          <p>Day Count: <input className='inp' type="text" id="dayCount" /></p>
          <p>Dice value: <input className='inp' type="text" id="diceValue" /></p>
          <p>Score: <input className='inp' type="text" id="score" /></p>
        </div>
      </div>
    );
  }
}
