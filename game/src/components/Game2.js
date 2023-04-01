import React, { useState, useEffect, useRef } from 'react';
import Box from './box';
import Die from './Die';
import './Game.css';
import CumulativeFlowGraph from "../Graph/CumulativeFlowGraph";

var diceValue = 0;
var cntDice = 0;
var cntDays = 0;
var isPaused = true;
var score = 0;
var modifierValue=0;

const data = [
    { date: "1", Backlog: 7, Ready_2_code: 6, Development: 5, Review:4, Production:3},
    { date: "2", Backlog: 15, Ready_2_code: 13, Development: 11, Review: 9, Production:7},
    { date: "3", Backlog: 20, Ready_2_code: 17, Development: 15, Review: 12, Production:9},
  ];


const Game = (props) => {
    const { WIPselection } = props.location.state;
    const {selected} = props.location.state;
    console.log("WIPselection, slected",WIPselection,selected)
    const [boxValues, setBoxValues] = useState([50, 0, 0, 0, 0, 0]);
    const [positivePoints, setpositivePoints] = useState("");
    const [totalPoints, settotalPoints] = useState();
    const [wipPoints, setwipPoints] = useState();
    const [mode, setMode] = useState('manual');

    const handleModeChange = (event) => {
        setMode(event.target.value);
        console.log("inside handle mode",mode)
        if (event.target.value === 'manual') {
            isPaused = true;
        } else {
            isPaused = false;
        }
        console.log(mode)
    };

    const handleDieRoll = (value) => {
        gameplay(value);
    };

    const handleFast = async () => {
        while (mode === 'Fast-Forward' && !isPaused) {
            const value = Math.floor(Math.random() * 6) + 1;
            gameplay(value);
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    };


    const handleAutoRoll = async () => {
        while (mode === 'auto' && !isPaused) {
            const value = Math.floor(Math.random() * 6) + 1;
            gameplay(value);
            await new Promise(resolve => setTimeout(resolve, 800)); // pause for 1 second
        }
    };

    useEffect(() => {
        if (mode === 'manual') {
            isPaused = true;
        } else {
            isPaused = false;
        }
    }, [mode]);

    const gameplay = (value) => {
        diceValue = value;
        console.log(value, diceValue);
        if (cntDice === 5) {
            cntDice = 0;
            cntDays += 1;
        }
        if (cntDays <10) {
            if (cntDice <= 4) {
                console.log(positivePoints)
                if (cntDice===0 && WIPselection==="Positive"){
                    if(positivePoints===""){
                        alert("Select Positive modifier value")
                    }
                    else{
                    value=value+positivePoints;
                    }
                }
                else if (WIPselection==="Total"&&cntDice===0)
                {
                    var sum = boxValues[1]+boxValues[2]+boxValues[3]+boxValues[4]
                    if(value+sum>totalPoints){
                        value=totalPoints-sum;
                    }
                }
                else if (WIPselection==="Refinement"&&cntDice===0){
                    if(value+boxValues[1]>wipPoints){
                        value=wipPoints-boxValues[1];
                    }
                }
                console.log('before if condition', value);
                if (value > boxValues[cntDice]) {
                    value = boxValues[cntDice];
                }
                console.log('After if condition', value);

                boxValues[cntDice] = boxValues[cntDice] - value;
                console.log("val list1", boxValues);
                boxValues[cntDice === 0 ? 1 : cntDice + 1] += cntDice === 0 ? value + modifierValue : value;
                console.log(boxValues);
                setBoxValues([...boxValues]);
                cntDice = cntDice + 1;
                console.log("cntDice", cntDice)
            }
        } else {
            alert('Game Over 10 days completed!!!');
            setMode("manual")
        }
    };

    const handlepositivePointsChange = (event) => {
        const positivePointsValue = Number(event.target.value);
        setpositivePoints(positivePointsValue);
    };

    const handletotalPointsChange = (event) => {
        const totalValue = Number(event.target.value);
        settotalPoints(totalValue);
    };

    const handlewipPointsChange = (event) => {
        const wipValue = Number(event.target.value);
        setwipPoints(wipValue);
    };

    return (
        <div>
            <br/>
             <div style={{ display: "flex", justifyContent: "center" }}>
                {WIPselection === 'Positive' && (
                    <div style={{color:"white",fontWeight:700}}>
                        <label htmlFor="positve-input">Enter Positive modifier number (0-50): </label>
                        <input
                            id="positve-input"
                            type="number"
                            min="0"
                            max="50"
                            value={positivePoints}
                            onChange={handlepositivePointsChange}
                        />
                    </div>
                )}
            </div>
            <br/>
            <div style={{ display: "flex", justifyContent: "center" }}>
                {WIPselection === 'Total' && (
                    <div style={{color:"white",fontWeight:700}}>
                        <label htmlFor="total-input">Enter Total WIP number (0-100): </label>
                        <input
                            id="total-input"
                            type="number"
                            min="0"
                            max="100"
                            value={totalPoints}
                            onChange={handletotalPointsChange}
                        />
                    </div>
                )}
            </div>
            <br/>
            <div style={{ display: "flex", justifyContent: "center" }}>
                {WIPselection === 'Refinement' && (
                    <div style={{color:"white",fontWeight:700}}>
                        <label htmlFor="wip-input">Enter Refinement WIP number (0-100): </label>
                        <input
                            id="wip-input"
                            type="number"
                            min="0"
                            max="100"
                            value={wipPoints}
                            onChange={handlewipPointsChange}
                        />
                    </div>
                )}
            </div>
            <Box valList={boxValues} cntDice={cntDice}/>
            <div className="mode-container" style={{color:"white", backgroundColor:"#8A2BE2",fontWeight:500}}><h6 style={{color:"white"}}>{WIPselection === "Null" ? 'Basic' : WIPselection} mode</h6></div>
            <div className="mode-container" style={{color:"white", backgroundColor:"deeppink",fontWeight:500}}>
                <label>
                    <input
                        type="radio"
                        value="auto"
                        checked={mode === 'auto'}
                        onChange={handleModeChange}
                    />
                    Auto
                </label>
                <label>
                    <input
                        type="radio"
                        value="Fast-Forward"
                        checked={mode === 'Fast-Forward'}
                        onChange={handleModeChange}
                    />
                    Fast-Forward
                </label>
                <label>
                    <input
                        type="radio"
                        value="manual"
                        checked={mode === 'manual'}
                        onChange={handleModeChange}
                    />
                    Manual
                </label>
            </div>
            {mode === 'manual' && (
                <Die onRoll={handleDieRoll} />
            )}
            {mode === 'auto' && (
                <Die onRoll={handleAutoRoll} />
            )}
            {mode === 'Fast-Forward' && (
                <Die onRoll={handleFast} />
            )}
            <div className="status-container">
                <p style={{color:"#8A2BE2", fontWeight:900}}>Current Day Count: {cntDays}</p>
                <p style={{color:"deeppink", fontWeight:900}}>Dice value: {diceValue}</p>
                <p style={{color:"#32CD32", fontWeight:900}}>Score: {boxValues[5]-boxValues[4]-boxValues[3]-boxValues[2]-boxValues[1]}</p>
            </div>
            <CumulativeFlowGraph data={data}/>
        </div>
    )
}

export default Game;
