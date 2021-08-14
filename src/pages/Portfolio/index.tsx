import React from 'react';
import {
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaReact,
} from 'react-icons/fa';
import { SiCss3, SiTypescript } from 'react-icons/si';
import { PageContent } from '../../components/PageContent';
import {
  Container,
  ImageContent,
  InfoContent,
  Project,
  Technologies,
} from './styles';

export const Portfolio: React.FC = () => {
  return (
    <PageContent>
      <Container>
        <Project>
          <ImageContent>
            <img
              src="https://raw.githubusercontent.com/alanstlim/PokeMarket/main/ss/home.png"
              alt="projeto"
            />
          </ImageContent>
          <InfoContent>
            <div>
              <h2>About :</h2>
              <h4>
                PokeMarket é uma loja virtual criados usando a [PokeApi]
                (https://pokeapi.co/), seguindo alguns desafios propostos, afim
                de por em prática novos conhecimentos.
              </h4>
            </div>
            <div>
              <h2>Functionalities :</h2>
              <h4>
                Tema de acordo com o elemento selecionado. <br />
                Modal com informações extras do produto selecionado. <br />
                Carrinho usando hooks. <br />
                Perfil com histórico de compras. <br />
                Controle de recompensas por compra.
              </h4>
            </div>
            <Technologies>
              <FaHtml5 />
              <SiCss3 />
              <FaJsSquare />
              <SiTypescript />
              <FaReact />
              <FaGitAlt />
              <FaGithub />
            </Technologies>
          </InfoContent>
        </Project>
      </Container>
    </PageContent>
  );
};
