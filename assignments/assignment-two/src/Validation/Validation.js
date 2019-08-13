import React from 'react';
import './Validation.css';
const Validation = props => {
  return (
    <p className='validation'>
      {props.textLength > 4 ? (
        <span className='long-enough'>Text Long Enough</span>
      ) : (
        <span className='too-short'>Text Too Short</span>
      )}
    </p>
  );
};
export default Validation;
