import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  width: 40%;
  padding: 1rem;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  background-color: ${colors.primaryBlue};

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
  }

  input {
    height: 2rem;
    width: 15rem;
    border-radius: 5px;
    border: none;
    padding: 0 0.5rem;

    :focus {
      outline: none;
    }
  }

  button {
    width: 7.5rem;
    height: 2.25rem;
    border-radius: 5px;
    background-color: ${colors.primaryYellow};
    transform: scale(0.9);
    transition: all ease 0.2s;

    h3 {
      color: ${colors.primaryBlack};
      font-weight: 700;
    }

    :hover {
      transform: scale(1);
      background-color: ${colors.primaryOrange};
      h3 {
        color: ${colors.primaryWhite};
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 2.375rem;
  font-family: 'Reenie Beanie', cursive;
`;
