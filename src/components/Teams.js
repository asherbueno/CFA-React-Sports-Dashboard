import React from 'react';
import PropTypes from 'prop-types';

const Teams = (props) => {
  return (
    <div>
      <ol className=''>
        {props.teams.map((team, i)=> <li key={i} className=''> {team.fullName}</li>)}
      </ol>
    </div>
  );
};
Teams.PropTypes = {
  teams: PropTypes.array.isRequired
};
export default Teams;
