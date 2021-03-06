import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  flex: 1;
  border-radius: 0.625rem;
  margin: 1rem;
  padding: 1rem;
  height: Calc(100vh - 15.6875rem);
  background-color: ${colors.primaryWhite};
  z-index: 999;
`;

export const Content = styled.div`
  height: 100%;
  overflow-y: auto;
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
