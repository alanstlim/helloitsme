import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { PageContent } from '../../components/PageContent';
import { Enterprise, Container, Role, WorkCard, Description } from './styles';

export const WorkdExperience: React.FC = () => {
  return (
    <PageContent>
      <Container>
        <WorkCard>
          <Role>Desenvolvedor Pleno</Role>
          <Enterprise>Havan</Enterprise>
          <div>
            <FaCalendarAlt />
            <Description>Abril 2021 - Atual</Description>
          </div>
          <Description>
            - Desenvolvimento e manutenção de aplicação React e dotNet. <br />
            - Desenvolver e auxiliar na manutenção de features. <br />
            - Desenvolver integrações com sistemas já existentes. <br />
            - Revisar códigos buscando melhorias de performance, clean code e
            boas práticas. <br />
          </Description>
          <hr />
        </WorkCard>
      </Container>
    </PageContent>
  );
};
