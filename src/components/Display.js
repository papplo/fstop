import React from 'react';
import PropTypes from 'prop-types';

import'./Display.css';

/**
 * Display - Description
 * @visibleName  Camera Top Display
 *
 */
const Display = (props) => {
  const { aperture, shutter, iso, program, evComp } = props.state;
  console.log(props.state);
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
  shutter: PropTypes.number,
  aperture: PropTypes.number,
  iso: PropTypes.number,
  evComp: PropTypes.number,
  program: PropTypes.string
}

Display.defaultProps = {
  aperture: 1,
  shutter: 2,
  iso: 3,
  evComp: 4,
  program: '5'
};

export default Display
