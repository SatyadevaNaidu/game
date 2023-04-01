import React from "react";
import { shallow } from "enzyme";
import Opt from "./Opt";

describe("Opt component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Opt />);
  });

  it("renders a Select component for WIP options", () => {
    wrapper.setState({ selected: "WIP" });
    expect(wrapper.find("Select").length).toEqual(2);
  });

  it("does not render a Select component for non-WIP options", () => {
    wrapper.setState({ selected: "NO WIP" });
    expect(wrapper.find("Select").length).toEqual(1);
  });

  it("updates state when the WIP option is selected", () => {
    wrapper.find("Select").at(0).simulate("change", { value: "WIP" });
    expect(wrapper.state().selected).toEqual("WIP");
  });

  it("updates state when a WIP selection is made", () => {
    wrapper.setState({ selected: "WIP" });
    wrapper.find("Select").at(1).simulate("change", { value: "Refinement" });
    expect(wrapper.state().WIPselection).toEqual("Refinement");
  });

  it("renders a button to start the game", () => {
    expect(wrapper.find("#optionBtn").length).toEqual(1);
  });

  it("navigates to the Game component when the Start button is clicked", () => {
    const historyMock = { push: jest.fn() };
    wrapper.setProps({ history: historyMock });
    wrapper.setState({ WIPselection: "Refinement", selected: "WIP" });
    wrapper.find("#optionBtn").simulate("click");
    expect(historyMock.push).toHaveBeenCalledWith("/Game", { WIPselection: "Refinement", selected: "WIP" });
  });
});
