import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  border-radius: 0.625rem;
  margin: 1rem;
  height: Calc(100vh - 4.6875rem);
  overflow-y: scroll;
  background-color: ${colors.primaryWhite};
  z-index: 999;
`;

export const BackgroundContent = styled.div`
  position: fixed;
  right: 3%;
  bottom: 3%;
  z-index: -1;

  svg {
    fill: ${colors.opacityBlue20};
    font-size: 15rem;
    animation: spin 60s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
