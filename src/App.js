import React, { Component } from 'react';
import Teams from './components/Teams';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      players: [],
      games: []
    }
  }

  componentWillMount() {
    this.getTeams()
  };

  getTeams() {
    const URL = 'http://data.nba.net/data/10s/prod/v1/2016/teams.json'
    fetch(URL)
      .then((res) => {
        return res.json();
    })
      .then((json) => {
        this.setState({teams: json.league.standard});
        console.log(json);
      });
  };

  render() {
    return (
      <div className="App">
        <Teams teams={this.state.teams} />
      </div>
    );
  }
}

export default App;
