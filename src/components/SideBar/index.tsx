import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import { VscFilePdf } from 'react-icons/vsc';
import eu from '../../assets/eu.jpg';
import { colors } from '../../styles/colors';
import { Container, InfoContent, Profile, Title } from './styles';

export const SideBar: React.FC = () => {
  return (
    <Container>
      <Profile>
        <img src={eu} alt="Eu" />
        <h1>Alan Santana</h1>
        <h3>Front-End Developer</h3>
      </Profile>
      <Title>Hello It&apos;s Me</Title>
      <InfoContent>
        <h3>Skills & Knowledges :</h3>
        <div> aa </div>
      </InfoContent>
      <InfoContent>
        <h3>Resume :</h3>
        <div>
          <p>
            Sou um desenvolvedor front-end [React e React-Native] com um pé do
            lado do back [Spring e .Net].
          </p>
        </div>
      </InfoContent>
      <InfoContent>
        <h3>Fast Travel :</h3>
        <div>
          <a
            href="https://www.linkedin.com/in/alanstlim/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin color={colors.primaryBlue} />
          </a>
          <a
            href="https://github.com/alanstlim/"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub />
          </a>
          <a
            href="https://drive.google.com/file/d/1468mZ6dCGiFsEV9NEFrurY7CtRZvJ-YC/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <VscFilePdf color={colors.primaryOrange} />
          </a>
        </div>
      </InfoContent>
    </Container>
  );
};
