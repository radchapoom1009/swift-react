import React from "react";
import { KeyButton } from './KeyButtonComponent';

const keys = [
  {
    name: '(',
    label: '(',
  },
  {
    name: ')',
    label: ')',
  },
  {
    name: 'CE',
    label: 'CE',
  },
  {
    name: 'C',
    label: 'C',
  },
  {
    name: '1',
    label: '1',
  },
  {
    name: '2',
    label: '2',
  },
  {
    name: '3',
    label: '3',
  },
  {
    name: '4',
    label: '4',
  },
  {
    name: '5',
    label: '5',
  },
  {
    name: '6',
    label: '6',
  },
  {
    name: '7',
    label: '7',
  },
  {
    name: '8',
    label: '8',
  },
  {
    name: '9',
    label: '9',
  },
  {
    name: '0',
    label: '0',
  },
  {
    name: '*',
    label: 'X',
  },
  {
    name: '.',
    label: '.',
  },
  {
    name: '=',
    label: '=',
  },
  {
    name: '/',
    label: '÷',
  },
];

export const KeyPadComponent = (props) => {
  return (
    <div className="button">
      { keys.map((key) => {
        return <KeyButton key={key.name} name={key.label} eventName={key.name} onClick={props.onClick} />
      }) }
    </div>
  );
}

export default KeyPadComponent;
