import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  flex: 1;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
`;

export const WorkCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 1rem;

  div {
    display: flex;
  }

  svg {
    fill: ${colors.primaryOrange};
  }

  hr {
    margin: 0.5rem 0;
    height: 1px;
    border: 0;
    border-top: 1px solid ${colors.primaryOrange};
    background-color: ${colors.primaryOrange};
  }
`;

export const Role = styled.h1`
  color: ${colors.primaryBlue};
`;

export const Enterprise = styled.h3`
  font-weight: 600;
  color: ${colors.primaryBlack};
  margin-left: 0.5rem;
`;

export const Description = styled.h3`
  font-weight: 500;
  margin-left: 0.5rem;
  color: ${colors.primaryBlack};
`;
