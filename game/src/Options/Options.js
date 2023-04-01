import React, { Component} from 'react';
import history from '../history';
import './Options.css'

export default class Options extends Component {
    render() {
        return (
            <div class='cls'>
                <form>
                    <h1>Choose one option</h1>
                <p><b>With WIP Limit:</b></p>
                <div class="form-group">
                    <input type="radio" id="optionA" name="options" value="optionA" data-toggle="tooltip" data-placement="right" title="If you select this option, WIP limit is applied to Box 1. So, tokens in Box1 will not exceed WIP limit"/>
                    <label for="optionA">WIP Limit for Box1</label>
                </div>
                <div class="form-group">
                    <input type="radio" id="optionB" name="options" value="optionB" data-toggle="tooltip" data-placement="right" title="If you select this option, WIP limit is applied to middle 4 boxes. So, sum of token in middle 4 boxes will not exceed WIP limit"/>
                    <label for="optionB">WIP Limit for Middle boxes</label>
                </div>
                <div class="form-group">
                    <input type="radio" id="optionC" name="options" value="optionC" data-toggle="tooltip" data-placement="right" title="If you select this option, WIP limit is applied to Box 1. So, the integer value is added to the tokens and moved to another box"/>
                    <label for="optionC">Add WIP Limit to Box1</label>
                </div>
                <p><b>Without WIP limit</b></p>
                <div class="form-group">
                    <input type="radio" id="noOption" name="options" value="noOption" data-toggle="tooltip" data-placement="right" title="No WIP limit option"/>
                    <label for="noOption">Without WIP Limit</label>
                </div>
                </form>
                <button onClick={()=> history.push('/Game')} class="primary" id="optionBtn">Start the game</button>
            </div>

        );
    }
}