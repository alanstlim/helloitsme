import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  Icon?: React.ComponentType<IconBaseProps>;
};

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container>
      <button type="button" {...rest}>
        {children}
      </button>
    </Container>
  );
};
