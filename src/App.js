import React, { Component } from 'react';
import './App.css';
// import Players from './components/Players';
import Teams from './components/Teams';
// import Standings from './components/Standings';
import GetTeam from './components/GetTeam';
import { Container, Row, Col, Navbar, NavbarBrand } from 'reactstrap';
import Schedule from './components/Schedule';
import PreviousGame from './components/PreviousGame';
import TeamStats from './components/TeamStats';


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
    // this.getPlayers();
    // this.getTeams();
    // this.getStandings();
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
      console.log('vteam', json.league.standard[0].vTeam);
    })
    .catch(function (error) {
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
        console.log('standard getTeams', json.league.standard[0]);
      });
  };

  // selectTeam = teams => {
  //     return team === team.name;
  // }

  getStandings() {
    const URL = `http://data.nba.net/data/10s/prod/v1/current/standings_all.json`
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({standings: json.league.standard});
        console.log('getStandings', json.league.standard[0]);
      });
  };

  // getConferences() {
  //   this.state.standings.filter((team) => {
  //     return team === 'west';
  //     west.push({team});
  //   });
  //   const east = this.state.standings.filter((team) => {
  //     return team === 'east';
  //     east.push({team});
  //   });
  //
  // }

  render() {
    return (
      <Container fluid>
        <Navbar light toggleable>
          <NavbarBrand href="/">NBA Dashboard</NavbarBrand>
        </Navbar>
          <Row>
          <Col xs="3">
            <GetTeam teams={this.state.teams} />
          </Col>
            <Col xs="9">
              <h2>TEAM NAME</h2>
            </Col>
          </Row>

            <Row>
              <Col xs="4">
                <Schedule />
              </Col>

            <Col xs="4">
              <PreviousGame schedule={this.state.schedule} />

            </Col>

          <Col xs="4">
            <TeamStats />
          </Col>
          </Row>
        {/* <Teams teams={this.state.teams} /> */}
        {/* <Players players={this.state.players} teams={this.state.teams} />
        <Standings standings={this.state.standings} teams={this.state.teams} west={this.state.west} east={this.state.east} /> */}
      </Container>
    );
  }
};

export default App;
