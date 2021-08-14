import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.header`
  display: flex;
  height: 4.6875rem;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.primaryBlue};

  h3 {
    font-weight: bold;

    :hover {
      color: ${colors.primaryYellow};
      text-decoration: underline ${colors.primaryYellow};
    }
  }
`;
