import React from 'react';
import { TextField } from '../../components/TextFields';
// import * as TextField from '../../components/TextFields';

const TextFieldDemo = () => {
  console.log('hi');

  return (
    <>
      <b>This is a Disabled Input</b>
      <TextField value="Disabled Input" disabled="true" />
      <b>A Valid Input</b>
      <TextField value="Accessible" />
      <b>An Input with errors</b>
      <TextField value="101" error="Could not be greater than" />
    </>
  );
};

export default TextFieldDemo;
