import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Hero.style';

const HeroColors = {
  success: {
    background: '#0FD06F',
    color: '#F9F9F9',
  },
  danger: {
    background: '#D0145E',
    color: '#F9F9F9',
  },
};
const Hero = ({ color, title, subtitle }) => {
  return (
      <S.Hero color={HeroColors[color]}>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
      </S.Hero>
  );
};

Hero.propTypes = {
  color: PropTypes.oneOf(['success', 'danger']),
  title: PropTypes.node.isRequired,
  subTitle: PropTypes.node.isRequired,
};

Hero.defaultProps= {
    color: 'success',
}

export default Hero;
