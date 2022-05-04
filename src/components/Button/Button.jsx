import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const ButtonColors = {
  primary: {
    background: '#0FD06F',
    color: '#F9F9F9',
  },
  success: {
    background: '#2196F3',
    color: '#F9F9F9',
  },
  danger: {
    background: '#D0145E',
    color: '#F9F9F9',
  },
};
const Button = ({ children, color, type }) => {
  return (
    <S.Button type={type} color={ButtonColors[color]}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  color: PropTypes.oneOf(['primary', 'success', 'danger']),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  color: 'primary',
};

export default Button;
