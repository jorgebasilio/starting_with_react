import React, { Component } from 'react';

//class Sumar extends Component{
//  render() {
//    const { sumar } = this.props;
//    return(
//      <button
//       onClick={ sumar }>
//        +1
//      </button>
//    ) 
//  }
//}

const Sumar = ({ sumar }) => {
  return(
    <button
      onClick={ sumar }>
      +1
    </button>
  ) 
}

export default Sumar;

