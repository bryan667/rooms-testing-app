import React, { useState } from 'react';
import RoomComponent from './RoomComponent';

const App = () => {
  const roomArray = [...Array(5)].map((_, index) => index);
  const initialFormState = {};
  for (let key in roomArray) {
    initialFormState[`formRoom${key}`] = {
      checkbox: false,
      selectAdult: 18,
      selectChildren: 0,
    };
  }

  const [formStates, setFormStates] = useState(initialFormState);

  const onSubmit = values => {
    console.log('submittedValues', values);
  };

  return (
    <div className="App">
      <div>
        {roomArray.map((_, index) => (
          <RoomComponent
            key={index}
            roomIndex={index}
            formStates={formStates}
            setFormStates={setFormStates}
          />
        ))}
        <div>
          <button onClick={() => onSubmit(formStates)}>Submit</button>
        </div>
      </div>
      <div>
        <pre className="json-pre">{JSON.stringify(formStates, null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
