import React from 'react';
import { Button, Block, Hero } from './components';

const App = () => {
  return (
    <div>
      <Hero color='success' title='Success hero' subtitle='Success subtitle' />
      <Hero color='danger' title='Danger hero' subtitle='Danger subtitle' />
      <Block color='primary'>Some text</Block>
      <Block color='success'>Some more text</Block>
      <Block color='danger'>All of this are evenly spaced</Block>
      <Button color='primary' type='submit'>Save changes</Button>
      <Button color='success' type='reset'>Save and continue</Button>
      <Button color='danger' type='button'>Cancel</Button>
    </div>
  );
};

export default App;