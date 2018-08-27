import React, { Component } from 'react';

import Display from '../components/Display'


export default class Camera extends Component {
  constructor (props) {
    super(props)
    this.state = {
      aperture: 1.4,
      shutter: 2000,
      iso: 320,
      evComp: -0.667,
      program:'A'
    }
  }
  increment = (propName, steps = 1 ) => {
    this.setState({
      [propName]: this.state[propName] * steps
    })
  }

  render() {
    return (
      <div>
      <button onClick={()=>this.increment('aperture', 2)}>Click to Step down Aperture</button>

      <Display state={this.state} />
        {this.props.children}
      </div>
    );
  }
}
