import styled, { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${colors.primaryWhite};
    }

    h2 {
      font-size: 1.125rem;
      font-weight: 500;
      color: ${colors.primaryWhite};
    }

    h3 {
      font-size: 1rem;
      font-weight: 400;
      color: ${colors.primaryWhite};
    }

    h4 {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${colors.primaryWhite};
    }
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${colors.primaryGray};
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
