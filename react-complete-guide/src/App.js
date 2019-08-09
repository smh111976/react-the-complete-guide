import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  // useState returns an array with exactly 2 elements
  // the first element is the current state,
  // the second element is function that allows us to update state
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  });

  const [otherState, setOtherState] = useState('some over value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');

    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ],
      otherState: personsState.otherState
    });
  };
  return (
    <div className='App'>
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      >
        {personsState.otherState}
      </Person>
    </div>
  );
};

export default app;
