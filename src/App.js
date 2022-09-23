import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filteredMonsters: [],
    };
  }

  #searchMonsters = (event) => {
    const { value } = event.target;
    const { monsters } = this.state;
 
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(value.toLowerCase()));

    this.setState(() => ({ filteredMonsters }));
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => ({
        monsters: users,
        filteredMonsters: users,
      })));
  }

  render() {
    const { filteredMonsters } = this.state;

    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='Search mobsters'
          onChange={ (event) => this.#searchMonsters(event) }
        />
        {
          filteredMonsters.map((monster) => <h1 key={ monster.id }>{ monster.name }</h1>)
        }
      </div>
    )
  }
}

export default App;
