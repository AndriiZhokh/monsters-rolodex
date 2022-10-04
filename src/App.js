import { Component } from 'react';

import CardList from './components/card-list/card-list.component';

import './App.css';
import SearchBox from './components/search-box/search-box.component';

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
      <div className='App'>
        <SearchBox
          className='monsters-search-box'
          placeholder='search monsters'
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
