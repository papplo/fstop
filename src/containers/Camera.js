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

  render() {
    return (
      <div>
      <Display
        load={this.state}
        // aperture={1.1}
        // shutter={2000}
        // iso={320}
        // program={'A'}
        // evComp={.66}
        />
        {this.props.children}
      </div>
    );
  }
}
