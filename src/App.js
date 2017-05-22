import React, { Component } from 'react';
import './App.css';
import Players from './components/Players';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      players: [],
      games: [],
      now: new Date()
    }
  }

  componentWillMount() {
    this.getPlayers()

  };

  getPlayers() {
    const URL = `http://data.nba.net/data/10s/prod/v1/2016/players.json`
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({players: json.league.standard});
        console.log(json.league);
      });
  };

  render() {
    return (
      <div className="App">
        <Players players={this.state.players} />
      </div>
    );
  }
}

export default App;
