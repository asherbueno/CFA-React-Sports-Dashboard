import React from 'react';
import { Card } from 'reactstrap';
import PropTypes from 'prop-types';

const PreviousGame = (props) => {

  const schedule = props.schedule.length > 0 ? props.schedule[0] : null;

  return(
    <Card>
      <div>
        <h2>Previous Game</h2>
        { schedule ? ( <p className=''> Team ID {schedule.hTeam.teamId} Score {schedule.hTeam.score} </p>  ) : (null) }
        { schedule ? ( <p className=''> Team ID {schedule.vTeam.teamId} Score {schedule.vTeam.score} </p>  ) : (null) }
      </div>
    </Card>
  )
};

PreviousGame.PropTypes = {
previousGame: PropTypes.array.isRequired
}

export default PreviousGame;
