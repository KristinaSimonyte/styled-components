import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Block.style';

const BlockColors = {
  primary: {
    background: '#2196F3',
  },
  success: {
    background: '#0FD06F',
  },
  danger: {
    background: '#D0145E',
  },
};

const Block = ({ children, color }) => {
  return <S.Block color={BlockColors[color]}>{children}</S.Block>;
};

Block.propTypes = {
  color: PropTypes.oneOf(['primary', 'success', 'danger']),
  children: PropTypes.node.isRequired,
};

Block.defaultProps = {
  color: 'primary',
};

export default Block;
