import React from 'react';
import { Button } from '../Button';
import { FormContent, Title } from './styles';

export const Login: React.FC = () => {
  return (
    <FormContent>
      <Title>Hello It&apos;s Me</Title>
      <div>
        <h1>- Dashboard -</h1>
        <input placeholder="Email" />
        <input placeholder="Password" type="password" />
      </div>
      <Button>
        <h3>Login</h3>
      </Button>
    </FormContent>
  );
};
