import React from 'react';
import './box.css';

const Box = ({ valList, cntDice }) => {
  const values = valList;

  return (
    <div className='hats-buckets'>

      <div className={'hats-div'}>
      <h2>{'Backlog >'}</h2>
      <div className='hat-value'>
        <span id='val-text'style={{fontWeight:700}}>{values[0]}</span>
      </div>
      </div>

      <div className={cntDice+1 === 1 ? 'box1' : 'hats-div'}>
      <h2>{'Refinement >'}</h2>
      <div className='hat-value'>
        <span id='val-text'style={{fontWeight:700}}>{values[1]}</span>
      </div>
      </div>

      <div className={cntDice+1 === 2 ? 'box2' : 'hats-div'}>
      <h2>{'Design >'}</h2>
      <div className='hat-value'>
        <span id='val-text'style={{fontWeight:700}}>{values[2]}</span>
      </div>
      </div>

      <div className={cntDice+1 === 3 ? 'box3' : 'hats-div'}>
      <h2>{'Development >'}</h2>
      <div className='hat-value'>
        <span id='val-text'style={{fontWeight:700}}>{values[3]}</span>
      </div>
      </div>

      <div className={cntDice+1 === 4 ? 'box4' : 'hats-div'}>
      <h2>{'Testing >'}</h2>
      <div className='hat-value'>
        <span id='val-text' style={{fontWeight:700}}>{values[4]}</span>
      </div>
      </div>

      <div className={cntDice+1 === 5 ? 'box5' : 'hats-div'}>
      <h2>{'Production >'}</h2>
      <div className='hat-value'>
        <span id='val-text'style={{fontWeight:700}}>{values[5]}</span>
      </div>
      </div>
    </div>
  );
};

export default Box;
