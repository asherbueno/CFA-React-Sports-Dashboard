import React, { Component } from 'react';

class getGame extends Component {
console.log('componentDidMount()');
const URL = 'https://morning-fortress-65767.herokuapp.com/api/?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNob3VoZWkueWFtYXVjaGlAbGl2ZS5jb20iLCJpYXQiOjE0OTQ1NzUxMDF9.0Cihe7R9D-yZYXD1sY2wMe_0xy25Rt7nHW8osM3ZxTw';
Axios.get(URL)
  .then((response) => {
    // console.log(response.data);
    this.setState({ ingredients: response.data});
  })
  .catch(function (error) {
    console.log(error);
  });
};
