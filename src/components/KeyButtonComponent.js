import React from "react";

export const KeyButton = ({ onClick, eventName, name }) => {
  return (
    <button name={eventName} onClick={onClick}>
      {`${name} `}
    </button>
  );
};
