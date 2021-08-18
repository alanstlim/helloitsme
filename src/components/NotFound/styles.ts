import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  border-radius: 1rem;
  margin-top: 1rem;
  background-color: ${colors.opacityBlue80};
  gap: 1rem;
`;
