import React from 'react';
import './UserOutput.css';
const UserOutput = props => {
  return (
    <div className='UserOutput'>
      <h1>{props.userName}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex amet fugit
        corporis harum nostrum aperiam eos impedit reprehenderit nemo in eius
        nam voluptates perferendis ab tempore, incidunt, eligendi nobis
        exercitationem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ad
        pariatur asperiores saepe ex dolores accusantium, ab itaque repellendus
        deleniti iure odio sit recusandae in officia, accusamus dolorem veniam
        nihil!
      </p>
    </div>
  );
};
export default UserOutput;
