import React from 'react';
import Hero from './Hero';

export default {
  title: 'Hero',
  component: Hero,
};

export const Success = () => 
  <Hero color='success' title='Success hero' subtitle='Success subtitle' />;

export const Danger = () => 
  <Hero color='danger' title='Danger hero' subtitle='Danger subtitle' />;


