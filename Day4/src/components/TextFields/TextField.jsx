import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './style';

const TextField = ({ value, error, disabled }) => {
  console.log(value);

  return (
    <>
      <Input type="text" value={value} disabled={disabled} error={error} />
      { error && <label htmlFor="app-text-field">{error}</label>}
    </>
  );
};

TextField.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
};

TextField.defaultProps = {
  value: '',
  error: '',
  disabled: false,
};

export default TextField;
