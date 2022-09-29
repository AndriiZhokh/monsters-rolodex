import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  onSearchChange = (event) => {
    const { value } = event.target;
    this.setState(() => ({ searchField: value.toLowerCase() }));
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
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField));

    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='Search mobsters'
          onChange={ onSearchChange }
        />
        {
          filteredMonsters.map((monster) => <h1 key={ monster.id }>{ monster.name }</h1>)
        }
      </div>
    )
  }
}

export default App;
