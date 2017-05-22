import React from 'react';
import PropTypes from 'prop-types';

const Players = (props) => {
  return (
    <div>
      <ol className=''>
          { props.teams.map((stand, i)=> <li key={ i } className=''> { props.teams.map( team => {
              if(team.teamId === stand.teamId) {
                return team.fullName
              }
            })}
          </li>)}
      </ol>
    </div>
  );
};

Players.propTypes = {
  standings: PropTypes.array.isRequired
};

export default Players;
