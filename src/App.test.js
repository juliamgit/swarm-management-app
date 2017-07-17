import React from "react";
import List from "./list";
import App from "./App"
import {shallow} from "enzyme";

let list;
beforeEach(() => {
  const wrapper = shallow(<App/>);
  list = wrapper.find(List);
});

it('contains two lists', () => {
  expect(list).toHaveLength(2);
});

describe('the Swarm Item List', () => {
  it('renders first with the correct heading', () => {
    expect(list.at(0)).toHaveProp("heading", "Swarm Items");
  });
  it('initially renders with no items', () => {
    expect(list.at(0)).toHaveProp("items", []);
  });
});

describe('the Annoyances List', () => {
  it('renders second with the correct heading', () => {
    expect(list.at(1)).toHaveProp("heading", "Annoyance Items");
  });
  it('initially renders with no items', () => {
    expect(list.at(1)).toHaveProp("items", []);
  });
});
