import React from 'react';

import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ onClick, className, label }) => (
  <span className={`${styles.button} ${className}`} onClick={onClick}>
    {label}
  </span>
);

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: undefined,
  label: '',
  className: '',
};

export default Button;
