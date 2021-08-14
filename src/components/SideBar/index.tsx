import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { SiGithub, SiGmail } from 'react-icons/si';
import { VscFilePdf } from 'react-icons/vsc';
import eu from '../../assets/eu.jpg';
import { colors } from '../../styles/colors';
import { Button } from '../Button';
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
          <Button>
            <FaLinkedin color={colors.primaryBlue} />
          </Button>
          <Button>
            <SiGmail color={colors.primaryOrange} />
          </Button>
          <Button>
            <SiGithub />
          </Button>
          <Button>
            <VscFilePdf color={colors.primaryOrange} />
          </Button>
        </div>
      </InfoContent>
    </Container>
  );
};
