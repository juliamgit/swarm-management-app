import React from "react";
import List from "./list";
import {shallow} from "enzyme";

it('renders the provided header', () => {
  const text = "This is my header";
  const wrapper = shallow(<List heading={text}/>);
  const header = wrapper.find("h2");
  expect(header).toHaveText(text);
});

it('renders the provided text box label', () => {
  const text = "This is my text box label";
  const wrapper = shallow(<List textBoxLabel={text}/>);
  const label = wrapper.find("label");
  expect(label).toHaveText(text);
});

describe('Item List', () => {
  it('shows no items when no items are provided', () => {
    const wrapper = shallow(<List/>);
    const list = wrapper.find("li");
    expect(list).toBeEmpty();
  });
  it('shows no items when passed an empty list', () => {
    const wrapper = shallow(<List items={[]}/>);
    const list = wrapper.find("li");
    expect(list).toBeEmpty();
  });
  it('shows the same number of items as have been passed in', () => {
    const items = ["one", "two", "three"];
    const wrapper = shallow(<List items={items}/>);
    const list = wrapper.find("li");
    expect(list).toHaveLength(3);
  });
  it('shows the same order of items as have been passed in', () => {
    const items = ["one", "two", "three"];
    const wrapper = shallow(<List items={items}/>);
    const list = wrapper.find("li");
    expect(list.at(0)).toHaveText("one");
    expect(list.at(1)).toHaveText("two");
    expect(list.at(2)).toHaveText("three");
  });
});




describe('when adding text to the input', () => {
  const text = "cats are awesome";
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<List/>);
    const input = wrapper.find("input");
    input.simulate("change", {target: {value: text}});
  });

  it('renders the text in the input', () => {
    const updatedInput = wrapper.find("input");
    expect(updatedInput.prop("value")).toEqual(text);
  });

  describe('when clicking the button', () => {
    beforeEach(() => {
      const button = wrapper.find("button");
      button.simulate("click");
    });

    it('appends the inputted text to the list', () => {
      const list = wrapper.find("li");
      expect(list).toHaveLength(1);
      expect(list.at(0)).toHaveText(text);
    });
    it('clears the text from the input box', () => {
      const updatedInput = wrapper.find("input");
      expect(updatedInput.prop("value")).toEqual("");
    });
  });
});

describe('when no text is entered', () => {
    let wrapper;
    wrapper = shallow(<List/>);

  describe('when clicking the button', () => {
    beforeEach(() => {
      const button = wrapper.find("button");
      button.simulate("click");
    });
    it("doesn't apend the inputted text to the list", () => {
      const list = wrapper.find("li");
      expect(list).toBeEmpty();
    });
  });
});
