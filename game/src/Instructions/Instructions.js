import React, { Component } from 'react';
import { Card} from 'react-bootstrap';
import history from '../history';
import './Instructions.css'


class Instructions extends Component {
    render() {
        return (
            <div className='fade-class' style={{ display: 'flex', justifyContent: 'center', padding: 30, animationName: 'fade-in'}}>
                <div><h2 style={{color:'yellow'}}>INSTRUCTIONS</h2>
                    <Card style={{ width: '70rem', backgroundColor:'lightblue', padding:10}}>
                        <h4 className='text'>
                        Welcome to the game PLAYER!!!
                        <br></br>
                        To begin, click on the "Next" button to go to the options page. There, you will have to choose between two options: "With WIP" or "Without WIP."
                        <br></br>
                        <br></br>
                        If you choose "Without WIP," click the "Start" button and then click on the dice. Each time you click on the dice, the tokens will move from Backlog to Refinement. This will happen after every roll. When the tokens reach the Production stage, it indicates that Day 1 is complete. The game lasts for 10 days.
                        <br></br>
                        <br></br>
                        If you choose "With WIP," there are three options: "WIP on Refinement," "Total WIP," and "Positive Modifier." After selecting one of these options, you will need to enter a WIP limit and then roll the dice. The game is the same as the "Without WIP" option.
                        <br></br>
                        <br></br>
                        "WIP on Refinement" applies the WIP limit to the Backlog, ensuring that the tokens in Backlog do not exceed the WIP limit.
                        <br></br>
                        <br></br>
                        "Total WIP" applies the WIP limit to the middle four boxes (Refinement, Design, Development, and Testing), ensuring that the sum of tokens in these boxes does not exceed the WIP limit.
                        <br></br>
                        <br></br>
                        "Positive Modifier" applies the WIP limit to the Backlog and adds an integer value to the tokens' values before moving them to Refinement.
                        <br></br>
                        <br></br>
                        On the options page, you will also find three playing modes: "Manual," "Auto," and "Fast-Forward." In "Manual" mode, you will have to roll the dice for each day. In "Auto" mode, the dice will roll automatically and show how the tokens move from one box to another for 10 days. In "Fast-Forward" mode, the game finishes with a single click, without showing each dice roll.
                        <br></br>
                        <br></br>
                        At the bottom of the page, you will see which day you are on, the dice value, and the score. The score is calculated using the following formula:
                        Score = Tokens in Production - (tokens in Refinement + Design + Development + Testing).
                        <br></br>
                        <br></br>
                        When you are ready to play the game, click the "Next" button.
                        </h4>
                    </Card>
                    <div style={{ textAlign: 'center', marginTop: '15px' }}>
                      <button className='int-btn pulse'onClick={() => history.push('/Options')}> {'>'}{'>'}NEXT{'>'}{'>'} </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Instructions;