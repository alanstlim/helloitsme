import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;

  h2 {
    color: ${colors.primaryBlack};
  }
`;

export const Project = styled.div`
  display: flex;
  height: 14.75rem;
  border-radius: 5px;
`;

export const ImageContent = styled.div`
  flex: 2;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoContent = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${colors.primaryGray};
  padding: 0 1rem;

  h2 {
    color: ${colors.primaryBlack};
    font-weight: 600;
  }
  h4 {
    color: ${colors.primaryBlack};
  }
`;

export const Technologies = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  align-items: flex-end;
  justify-content: flex-end;

  svg {
    font-size: 1.5rem;
  }
`;
