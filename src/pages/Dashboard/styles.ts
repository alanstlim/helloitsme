import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Category = styled.details`
  display: flex;
  border-radius: 5px;
  padding: 10px 0px;
  background-color: ${colors.primaryBlue};
`;

export const TitleCategory = styled.summary`
  font-size: 1.125rem;
  font-weight: 500;
  margin: 0.5rem;
  color: ${colors.primaryWhite};
`;

export const CardWork = styled.div`
  display: flex;
  flex: 1;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.primaryWhite};
  margin: 0.1rem 0;
  padding: 0 1rem;

  p {
    max-width: 50rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  div {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }

  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const CardProject = styled.div`
  display: flex;
  flex: 1;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.primaryWhite};
  margin: 0.1rem 0;
  padding: 0 1rem;

  p {
    max-width: 50rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
