import React from 'react';
import PropTypes from 'prop-types';

const Players = (props) => {
  return (
    <div>
      <ol className=''>
        {props.players.map((player, i)=> <li key={i} className=''> {player.firstName} {player.lastName}</li>)}
      </ol>
    </div>
  );
};

Players.propTypes = {
  players: PropTypes.array.isRequired
};

export default Players;
