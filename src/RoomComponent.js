import React, { useState, useEffect } from 'react';
import { inputSelectAdult, inputSelectChildren } from './input/inputData';

const RoomComponent = props => {
  const { roomIndex, formStates, setFormStates } = props;
  const formName = `formRoom${roomIndex}`;
  const [isLocked, toggleIsLocked] = useState(true);
  const [isChecked, toggleChecked] = useState(false);

  useEffect(() => {
    if (isChecked === true || roomIndex === 0) {
      toggleIsLocked(false);
    } else {
      toggleIsLocked(true);
    }
  }, [isChecked, roomIndex]);

  const onSelectChange = e => {
    const previousState = { ...formStates };
    previousState[formName][e.target.name] = e.target.value;
    setFormStates(previousState);
  };

  return (
    <div className="room-component">
      <div>
        {roomIndex + 1 === 1 ? null : (
          <input
            type="checkbox"
            name={'checkbox'}
            onClick={e => {
              toggleChecked(!isChecked);
              const previousState = { ...formStates };
              previousState[formName][e.target.name] = !isChecked;
              setFormStates(previousState);
            }}
          />
        )}
        <label>{`Room ${roomIndex + 1 || ''}`}</label>
      </div>
      <div>
        <div className="room-select-box">
          <div>Adults (18+)</div>
          <select
            disabled={isLocked}
            name="selectAdult"
            onChange={e => onSelectChange(e)}
          >
            {inputSelectAdult.map(({ value, label }, index) => {
              if (value >= 18) {
                return (
                  <option key={index} value={value}>
                    {label}
                  </option>
                );
              } else {
                return null;
              }
            })}
          </select>
        </div>
        <div className="room-select-box">
          <div>Children (0-17)</div>
          <select
            disabled={isLocked}
            name="selectChildren"
            onChange={e => onSelectChange(e)}
          >
            {inputSelectChildren.map(({ value, label }, index) => (
              <option key={index} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default RoomComponent;
