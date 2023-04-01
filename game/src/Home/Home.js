import React, { Component, useState } from "react";
import { Button } from 'react-bootstrap';
import logo from '../assests/loader4.gif'
import logo1 from '../assests/loader6.gif'
import history from './../history';
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  handleClick = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      history.push('/Instructions');
    }, 3000); // navigate to the next page after 3 seconds
  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <div className="App">
          {!this.state.isLoading ? (
            <header className="App-header">
              <img src={logo} style={{width: 300, height: 300}} alt="logo"/>
              <br></br>
            <form>
              <Button className="btn" variant="btn btn-success" onClick={this.handleClick}>LET'S TAKE OFF!</Button>
            </form>
            </header>
          ) : (
            <div className="loading-animation">
              <img src={logo1} style={{ width: '490px', height: '490px' }} alt="loading animation"/>
            </div>
          )}
          </div>
        </div>
      </div>
    );
  }
}
