import React from 'react';

const getTeamSchedule = (props) => {
  constructor() {
    state = {
      this.year: 2016,
      this.teamName: "blazers"
    }
  };

  const URL = `http://data.nba.net/data/10s/prod/v1/{${this.state.year}}/teams/{${teamName}}/schedule.json`;

  fetch(URL)
    .then(function(responseObj) {
      console.log('status: ', responseObj.status);
  })

};
