import React from 'react';
<<<<<<< HEAD

class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Coords</button>
    );
  }
}

export default CoordinatesButton
=======
import ReactDOM from 'react-dom';

export default class CoordinatesButton extends React.Component {
 
  onReceiveCoordinates = (event) => {
    console.log(event);
  }
 
  render() {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    );
  }
}
>>>>>>> 19ae3e2112f327814a1c819264fdf03226fb35b4
