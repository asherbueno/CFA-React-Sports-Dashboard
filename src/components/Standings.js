import React from 'react';
import PropTypes from 'prop-types';

const Standings = (props) => {
  return (
    <div>
      <ol className=''>
          { props.standings.map((stand, i)=> <li key={ i } className=''> { props.teams.map( team => {
              if(team.teamId === stand.teamId) {
                return team.fullName
              }
            })}
          </li>)}
      </ol>
    </div>
  );
};

Standings.propTypes = {
  standings: PropTypes.array.isRequired
};

export default Standings;
