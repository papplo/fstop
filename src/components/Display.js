import React from 'react';
import PropTypes from 'prop-types';

import'./Display.css';

const Display = (props) => {
  const { aperture, shutter, iso, program, evComp } = props.load;
  return (
   <div className="container flex--aMid">
      <div className="displayDeck">
        <span className="bigger">s.s:{shutter}</span>
        <span className="bigger">f:{aperture}</span>
        <span>{evComp}</span>
        <span>iso:{iso}</span>
        <span>{program}</span>
      </div>
    </div>
  )
}

Display.propTypes = {
  aperture: PropTypes.number,
  shutter: PropTypes.number,
  iso: PropTypes.number,
  evComp: PropTypes.number,
  program: PropTypes.string
}

export default Display
