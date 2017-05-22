import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      players: [],
      games: [],
      schedule: []
    }
  }



  componentWillMount() {

    this.getTeamSchedule()
  }

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

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
