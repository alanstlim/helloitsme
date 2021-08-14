import React from 'react';
import { Button } from '../Button';
import { Container } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Button>
        <h3>About Me</h3>
      </Button>
      <Button>
        <h3>Work Experiences</h3>
      </Button>
      <Button>
        <h3>Portfolio</h3>
      </Button>
      <Button>
        <h3>Curriculum</h3>
      </Button>
    </Container>
  );
};
