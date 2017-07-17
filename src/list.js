import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items || [],
      newListItemInput: '',
    };

    this.updateNewListItemInput = this.updateNewListItemInput.bind(this);
  }

  onAddButtonClick() {
    if (this.state.newListItemInput) {
      this.appendNewListItem();
    }
  }

  appendNewListItem() {
    this.setState({
      items: this.state.items.concat(this.state.newListItemInput),
      newListItemInput: '',
    });
  }

  listItem(itemText, key) {
    return (
      <li key={key}>
        <span>{itemText}</span>
      </li>
    );
  }

  updateNewListItemInput(event) {
    const inputtedText = event.target.value;
    this.setState({ newListItemInput: inputtedText });
  }

  render() {
    return (
      <div>
        <h2>{this.props.heading}</h2>
        <ul>
          {this.state.items.map(this.listItem)}
        </ul>
        <label htmlFor="textBox">{this.props.textBoxLabel}</label>
        <input
          onChange={this.updateNewListItemInput}
          type="text"
          value={this.state.newListItemInput}
          placeholder="Enter your text here"
        />
        <button onClick={this.onAddButtonClick.bind(this)} type="button">Add</button>
      </div>
    );
  }
}

export default List;
