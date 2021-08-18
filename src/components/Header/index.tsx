import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../Button';
import { Container } from './styles';

export const Header: React.FC = () => {
  const history = useHistory();

  const handlePath = useCallback(
    (path: string) => {
      history.push(path);
    },
    [history],
  );
  return (
    <Container>
      <Button onClick={() => handlePath('/')}>
        <h3>About Me</h3>
      </Button>
      <Button onClick={() => handlePath('/WorkExperience')}>
        <h3>Work Experiences</h3>
      </Button>
      <Button onClick={() => handlePath('/Portfolio')}>
        <h3>Portfolio</h3>
      </Button>
      <Button onClick={() => handlePath('/Curriculum')}>
        <h3>Curriculum</h3>
      </Button>
      <Button onClick={() => handlePath('/Dashboard')}>
        <h3>Dashboard</h3>
      </Button>
    </Container>
  );
};
