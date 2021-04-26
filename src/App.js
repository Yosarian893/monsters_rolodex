import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://88b05b85-6e4f-4fbb-b03a-2c80bd91fb38.mock.pstmn.io/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => this.setState({ searchField: e.target.value });  //Note that the arrow function obviates the need for the 'this' binding of the function in the constructor

  render() {
    const { monsters, searchField } = this.state; //Destructuring
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1> 
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <p />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
