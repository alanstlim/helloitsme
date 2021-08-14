import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  gap: 2rem;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-around;
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${colors.primaryBlack};
`;

export const SubTitle = styled.h2`
  text-align: center;
  font-weight: 600;
  color: ${colors.primaryBlack};
`;

export const CardsContent = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 2rem;
  gap: 2.5rem;
`;

export const Card = styled.div`
  display: flex;
  height: 20.56rem;
  width: 14.75rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  display: flex;
  padding: 1.5rem;
  background-color: ${colors.opacityBlue80};
  text-align: center;

  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0 1rem;

    svg {
      font-size: 3rem;
      fill: ${colors.primaryWhite};
      transform: scale(0.9);
      transition: all ease 0.3s;

      :hover {
        transform: scale(1);
      }
    }
  }
`;
