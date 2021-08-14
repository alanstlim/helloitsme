import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 15.625rem;
  height: 100vh;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.primaryBlue};
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;

  img {
    height: 9.375rem;
    border-radius: 50%;
  }

  h1 {
    color: ${colors.primaryYellow};
  }

  h3 {
    font-weight: 500;
  }
`;

export const Title = styled.h1`
  font-size: 2.375rem;
  font-family: 'Reenie Beanie', cursive;
`;

export const InfoContent = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    padding: 0 0.75rem;
    font-weight: 500;
  }

  div {
    width: 14.125rem;
    padding: 0.5rem 0.75rem;
    display: flex;
    background-color: ${colors.primaryWhite};
    gap: 1rem;
    align-items: center;
    justify-content: space-around;

    p {
      font-size: 0.875rem;
      text-align: center;
    }

    svg {
      font-size: 1.5625rem;
      transform: scale(0.9);
      transition: all ease 0.3s;

      :hover {
        fill: ${colors.primaryYellow};
        transform: scale(1);
      }
    }
  }
`;
