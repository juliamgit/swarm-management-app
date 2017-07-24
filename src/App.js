import React, { Component } from 'react';
import List from './list';


class App extends Component {

  render() {
    return (
      <div>
        <header>
          <h1>Swarm Management App</h1>
        </header>

        <List items={[]} heading="Swarm Items" textBoxLabel="Add New Swarm Item" />
        <List items={[]} heading="Annoyance Items" textBoxLabel="Add New Annoyance Item" />

        <img src="https://s-media-cache-ak0.pinimg.com/736x/19/e7/25/19e7251c6a0eec74ff7fd039f8c51518--unicorn-pictures-black-unicorn.jpg" />
        <img src="https://i2.wp.com/www.tor.com/wp-content/uploads/2014/12/inflatable-cat-unicorn-horn.jpg?fit=640%2C%209999&crop=0%2C0%2C100%2C640px" />
        <img src="https://s-media-cache-ak0.pinimg.com/736x/31/80/a3/3180a39b733032f7f191c904384a46f1--unicorn-funny-team-unicorn.jpg" />
      </div>
    );
  }
}

export default App;
