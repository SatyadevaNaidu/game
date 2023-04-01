import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Select, { components } from "react-select";
import React from 'react';
import history from '../history';
import './Options.css'
import Game from "../components/Game2";

const Control = ({ children, ...props }) => (
  <components.Control {...props}>
    Click to Select → {children}
  </components.Control>
);

const Opt = () => {
  const options = [
    { value: "WIP", label: "With WIP" },
    { value: "NO WIP", label: "No WIP" },
  ];
  const options1 = [
    { value: "Refinement", label: "WIP on Refinement" },
    { value: "Total", label: "Total WIP" },
    { value: "Positive", label: "Positive modifier" },
  ];

  const customStyles = {
    singleValue: (base) => ({
      ...base,
      padding: "5px 10px",
      borderRadius: 5,
      background: "yellow",
      color: "white",
      display: "flex",
      width: "fit-content",
    }),
    /*option: (provided, state) => ({
      ...provided,
      color: state.data.value === "" ? "red" : "black",
    }),*/
  };

  const [selected, setSelected] = useState("");
  const [showWIPSelect, setShowWIPSelect] = useState(false); // added state variable to track whether to show WIP select or not
  const [WIPselection,setWIPselection] = useState("Null")

  var handleChange = (selected) => {
    setSelected(selected.value);
    setShowWIPSelect(selected.value === "WIP"); // show WIP select if "With WIP" is selected
  };

  var handlenewChange= (selected) => {
    setWIPselection(selected.value);
  };

  return (
    <div className="container">
      <br></br>
      <div className="mt-5 m-auto w-50">
        <Select
          onChange={handleChange}
          styles={customStyles}
          components={{ Control }}
          options={options}
          getOptionLabel={(option) => (
            <span style={{ color: option.value === "" ? "" : "black" }}>
              {option.label}
            </span>
          )}
        />
        <div>
          <br></br>
        {showWIPSelect && ( // render WIP select if showWIPSelect is true
          <Select
          onChange={handlenewChange}
          styles={customStyles}
          components={{ Control }}
          options={options1}
          getOptionLabel={(option1) => (
            <span style={{ color: option1.value === "" ? "" : "black" }}>
              {option1.label}
            </span>
          )}
        />
        )}
        </div>
      </div>
      <button onClick={()=> history.push('/Game', { WIPselection,selected })} class="primary" id="optionBtn">Start the game</button>
    </div>
  );
};
export default Opt;
