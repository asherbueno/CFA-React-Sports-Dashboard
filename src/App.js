import React, { Component } from 'react';
import './App.css';
import Players from './components/Players';
import Teams from './components/Teams';
import Standings from './components/Standings';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      players: [],
      games: [],
      schedule: [],
      standings: [],
      west: [],
      east: [],
      year: new Date().getFullYear() -1

    }
  }

  componentWillMount() {
    this.getPlayers();
    this.getTeams();
    this.getStandings();
    this.getTeamSchedule()

  };



getTeamSchedule() {
  const URL = "http://data.nba.net/data/10s/prod/v1/2016/teams/blazers/schedule.json";
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      this.setState({ schedule: json.league.standard});
      console.log(this.state.schedule);

    })
    .then(function (error) {
      console.log(error);
    });
};

  getPlayers() {
    const URL = `http://data.nba.net/data/10s/prod/v1/${this.state.year}/players.json`
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
    const URL = `http://data.nba.net/data/10s/prod/v1/${this.state.year}/teams.json`
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({teams: json.league.standard});
        console.log(json.league.standard);
      });
  };

  getStandings() {
    const URL = `http://data.nba.net/data/10s/prod/v1/current/standings_all.json`
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({standings: json.league.standard.teams});
        console.log(json.league.standard);
      });
  };

  getConferences() {
    const west = this.state.standings.filter((team) => {
      return team === 'west';
    });
    const east= this.state.standings.filter((team) => {
      return team === 'east';
    });

  }

  render() {
    return (
      <div className="App">
        <Players players={this.state.players} teams={this.state.teams} />
        <Standings standings={this.state.standings} teams={this.state.teams} west={this.state.west} east={this.state.east} />
      </div>
    );
  }
}

export default App;
