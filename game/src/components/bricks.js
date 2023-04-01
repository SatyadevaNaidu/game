import React from 'react';
import './bricks.css';


const Hats = ({ title, value, cntDice }) => {
  return (
    <div>
        <div>
            <br></br>
        </div>
    <div className='hats-div'>
      <h2>{title}</h2>
      <div className='hat-value'>
        <span id='val-text'>{value}</span>
      </div>
    </div>
    </div>
  );
}

export default Hats;