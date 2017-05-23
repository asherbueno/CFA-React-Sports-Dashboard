import React, { Component } from 'react';
import './App.css';
import Players from './components/Players';
import Teams from './components/Teams';

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
    this.getTeams()

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
}

  getTeams() {
    const URL = 'http://data.nba.net/data/10s/prod/v1/2016/teams.json'
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({teams: json.league.standard});
        console.log(json.league.standard);
      });
  };

  render() {
    return (
      <div className="App">
        <Players players={this.state.players} teams={this.state.teams} />
        <Teams teams={this.state.teams} />
      </div>
    );
  }
}

export default App;
