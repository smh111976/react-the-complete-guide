import React from 'react';
import './UserInput.css';
const UserInput = props => {
  return (
    <div className='UserInput'>
      <input
        type='text'
        style={props.style}
        onChange={props.change}
        value={props.userName}
      />
    </div>
  );
};
export default UserInput;
