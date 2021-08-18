import React from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { colors } from '../../styles/colors';
import { Container } from './styles';

type NotFoundProps = {
  message: string;
  Icon?: React.ComponentType<IconBaseProps>;
  iconColor?: string;
  iconSize?: number;
};

export const NotFound: React.FC<NotFoundProps> = ({
  message,
  Icon,
  iconColor = colors.primaryWhite,
  iconSize = 16,
}) => {
  return (
    <Container>
      {Icon && <Icon color={iconColor} size={iconSize} />}
      <h2>{message}</h2>
    </Container>
  );
};
