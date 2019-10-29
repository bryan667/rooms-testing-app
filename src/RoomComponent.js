import React, { useState, useEffect } from 'react';
import { inputSelectAdult, inputSelectChildren } from './input/inputData';

const RoomComponent = props => {
  const { roomIndex, formName, formStates, setFormStates } = props;
  const [isLocked, toggleIsLocked] = useState(true);

  useEffect(() => {
    if (formStates[formName].checkbox === true) {
      toggleIsLocked(false);
    } else {
      toggleIsLocked(true);
    }
  }, [formStates, formName]);

  const onSelectChange = e => {
    const previousState = { ...formStates };
    previousState[formName][e.target.name] = e.target.value;
    setFormStates(previousState);
  };

  return (
    <div className="room-component">
      <div className="room-label-container">
        {roomIndex + 1 === 1 ? null : (
          <input
            type="checkbox"
            name={'checkbox'}
            checked={formStates[formName].checkbox}
            onChange={e => {
              toggleIsLocked(!e.target.checked);
              const previousState = { ...formStates };

              if (e.target.checked) {
                for (let i = roomIndex; i > -1; i--) {
                  previousState[`formRoom${i}`][e.target.name] =
                    e.target.checked;
                }
              }

              previousState[`formRoom0`][e.target.name] = true;
              previousState[formName][e.target.name] = e.target.checked;
              setFormStates(previousState);
            }}
          />
        )}
        <label>{`Room ${roomIndex + 1 || ''}`}</label>
      </div>
      <div
        className={`room-values-container ${
          formStates[formName].checkbox ? 'white' : 'gray'
        }`}
      >
        <div className="room-select-box">
          <div>
            <div>Adults</div>
            <div>(18+)</div>
          </div>
          <select
            disabled={isLocked}
            name="selectAdult"
            value={formStates[formName].selectAdult}
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
          <div>
            <div>Children</div>
            <div>(0-17)</div>
          </div>
          <select
            disabled={isLocked}
            name="selectChildren"
            value={formStates[formName].selectChildren}
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
