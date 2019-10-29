import React, { useState, useEffect } from 'react';
import RoomComponent from './RoomComponent';

const App = () => {
  const roomArray = [...Array(4)].map((_, index) => index);
  const initialFormState = {};
  for (let key in roomArray) {
    initialFormState[`formRoom${key}`] = {
      checkbox: false,
      selectAdult: 18,
      selectChildren: 0,
    };
  }

  if (roomArray.length > 0) {
    initialFormState.formRoom0.checkbox = true;
  }

  const [formStates, setFormStates] = useState(initialFormState);
  useEffect(() => {
    console.log('hey hey hey');
  }, [formStates]);

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
            formName={`formRoom${index}`}
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
