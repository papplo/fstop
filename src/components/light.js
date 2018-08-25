import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Display = ({ aperture, shutter, iso, program, evComp }) => (
  <div>
    <span>s.s:{shutter}</span>
    <span>f:{aperture}</span>
    <span>+-{evComp}</span>
    <span>iso:{iso}</span>
    <span>{program}</span>
  </div>
)

Display.propTypes = {
  aperture: PropTypes.number.isRequired,
  shutter: PropTypes.number.isRequired,
  iso: PropTypes.number.isRequired,
  evComp: PropTypes.number.isRequired

}
export default Display
