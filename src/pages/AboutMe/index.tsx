import React from 'react';
import {
  FaAndroid,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaReact,
} from 'react-icons/fa';
import { SiCss3, SiNextDotJs, SiTypescript } from 'react-icons/si';
import { PageContent } from '../../components/PageContent';
import {
  Card,
  CardsContent,
  Container,
  SubTitle,
  Title,
  TitleContent,
} from './styles';

export const AboutMe: React.FC = () => {
  return (
    <PageContent>
      <Container>
        <TitleContent>
          <Title>Hello World!</Title>
          <SubTitle>
            I’m Alan Santana, a Front-end Developer <br />
            with React and React Native, <br />
            based in SC/Brazil.
          </SubTitle>
        </TitleContent>
        <CardsContent>
          <Card>
            <h2>About Me:</h2>
            <div>
              <h3>
                Me divirto fazendo desafios e projetos acadêmicos,
                principalmente usando tecnologias que estou aprendendo, nada
                mais gratificante que ver a própria evolução em decorrer do
                tempo. Atualmente sou Dev. Pleno na Havan com uma missão:
                Surpreender e encantar a todos.
              </h3>
            </div>
          </Card>
          <Card>
            <h2>Hobbies:</h2>
            <div>
              <h3>Swimming, Cycling, Run in the City, Travel and Figma</h3>
            </div>
          </Card>
          <Card>
            <h2> Main Skills & Knowledges:</h2>
            <div>
              <FaHtml5 />
              <SiCss3 />
              <FaJsSquare />
              <SiTypescript />
              <FaGitAlt />
              <FaGithub />
              <FaBootstrap />
              <FaReact />
              <SiNextDotJs />
              <FaReact />
              <FaAndroid />
            </div>
          </Card>
        </CardsContent>
      </Container>
    </PageContent>
  );
};
