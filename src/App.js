import React, { Component } from 'react';
import List from "./list"

class App extends Component {

  render() {
    return (
      <div>
        <header>
          <h1>Swarm Management App</h1>
        </header>
        <List items={["Item 1"]} heading="Swarm Items" textBoxLabel="Add New Swarm Item"/>
        <List items={["SecondList Item 1"]} heading="Annoyance Items" textBoxLabel="Add New Annoyance Item"/>
      </div>
    );
  }
}

export default App;