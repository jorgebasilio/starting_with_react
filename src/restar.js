import React, { Component } from 'react';

//class Restar extends Component{
//  render() {
//    const { restar } = this.props;
//    return(
//      <button
//        onClick={ restar }>
//        -1
//      </button>
//    )
//  }
//}


const Restar = ({ restar }) => {
  return(
    <button
      onClick={ restar }>
      -1
    </button>
  )
}

export default Restar;
