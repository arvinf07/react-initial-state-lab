

import React from 'react'


export default class Bomb extends React.Component {

  state = {
    secondsLeft: this.props.initialCount
  }
  
  render(){
    if(this.state.secondsLeft > 0){
      return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    } else{
      return <p>Boom!</p>
    }
  }

}