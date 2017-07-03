import React, { Component } from 'react';

class List extends Component {
constructor(props) {
  super(props)
  this.state = {
    items: props.items,
    newListItemInput: ""
  };
  this.updateNewListItemInput = this.updateNewListItemInput.bind(this);
}
  listItem(itemText) {
    return (
      <li>
        <span>{itemText}</span>
      </li>
    );
  }

  appendNewListItem() {
    this.setState((state, props) => {
      state.items.push(state.newListItemInput);
      state.newListItemInput = "";

      return state;
    });
  }

  updateNewListItemInput(event) {
    var inputtedText = event.target.value;
    this.setState({newListItemInput: inputtedText});
  }

  render() {
    return (
      <div>
    <h2>{this.props.heading}</h2>
    <ul>
      {this.state.items.map(this.listItem)}
    </ul>
    <label>{this.props.textBoxLabel}</label>
    <input onChange={this.updateNewListItemInput} type="text" value={this.state.newListItemInput} placeholder="Enter your text here" />
    <button onClick={this.appendNewListItem.bind(this)} type="button">Add</button>
    </div>
  );
  }
}

export default List;
