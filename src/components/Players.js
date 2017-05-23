import React from 'react';
import PropTypes from 'prop-types';

const Players = (props) => {
  return (
    <div>
      <ol className=''>
        { props.players.map((player, i)=> <li key={ i } className=''> { player.firstName } { player.lastName }  { props.teams.map( team => {
            if(team.teamId === player.teamId) {
              return team.fullName
            }
          })}
        </li>)}
      </ol>
    </div>
  );
};

Players.propTypes = {
  players: PropTypes.array.isRequired
};

export default Players;
