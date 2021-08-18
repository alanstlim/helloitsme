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
import { Card, CardsContent, SubTitle, Title, TitleContent } from './styles';

export const AboutMe: React.FC = () => {
  return (
    <PageContent>
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
              <br />
              Hello World,
              <br />
              Sou desenvolvedor Front-End, atualmente focado em React.js e React
              Native.
              <br />
              <br /> Iniciei meus estudos com Java em meados de 2012 durante meu
              ensino médio / profissionalizante, e desde aquela época sempre fui
              apaixonado por mobile, onde investi grande parte dos meus estudos.
              <br />
              <br /> Em 2019 fui apresentado ao React Native e me encantei,
              tiver a oportunidade de trabalhar com a biblioteca até o inicio de
              2020.
              <br />
              <br /> Hoje trabalho com React aproveitando todo o conhecimento
              que adquiri durante essa jornada e expandindo cada vez mais.
              Atualmente estou me aventurando no mundo do back-end estudando
              NodeJs.
              <br />
              <br /> Dev. Pleno na Havan com uma missão: Surpreender e encantar
              a todos.
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
    </PageContent>
  );
};
