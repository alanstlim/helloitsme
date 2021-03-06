import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { colors } from '../../styles/colors';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  Icon?: React.ComponentType<IconBaseProps>;
  iconColor?: string;
  iconSize?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  Icon,
  iconColor = colors.primaryWhite,
  iconSize = 16,
  ...rest
}) => {
  return (
    <Container>
      {Icon && <Icon color={iconColor} size={iconSize} />}
      <button type="button" {...rest}>
        {children}
      </button>
    </Container>
  );
};
