import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const listThings = (props) => {
  return (
    <ListGroup>
    {props.things.map((thing, i) => <ListGroupItem key={i}>{thing.name}</ListGroupItem>)}
  </ListGroup>
  )
}

export default listThings;
