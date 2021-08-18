import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { PageContent } from '../../components/PageContent';
import { Enterprise, Role, WorkCard, Description } from './styles';

export const WorkdExperience: React.FC = () => {
  return (
    <PageContent>
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
          - Revisar códigos buscando melhorias de performance, clean code e boas
          práticas. <br />
        </Description>
        <hr />
      </WorkCard>
      <WorkCard>
        <Role>Desenvolvedor Mobile</Role>
        <Enterprise>HM Inovação & Tecnologia</Enterprise>
        <div>
          <FaCalendarAlt />
          <Description>Dez 2020 - Abril 2021</Description>
        </div>
        <Description>
          - Desenvolver aplicações com front-end focado em React Native
          integração back-end em Spring Boot.
          <br />
          - Auxiliar na manutenção dos componentes e aplicativos dos clientes.
          <br />- Publicar os aplicativos na loja da Google Play e Apple Store.
        </Description>
        <hr />
      </WorkCard>
      <WorkCard>
        <Role>Desenvolvedor Mobile</Role>
        <Enterprise>SoftNature</Enterprise>
        <div>
          <FaCalendarAlt />
          <Description>Set 2020 - Nov 2020</Description>
        </div>
        <Description>
          - Desenvolvimento da aplicação em React Native para gerenciamento de
          restaurantes. <br />
          - Pedidos pelo celular;
          <br />
          - Fechar conta;
          <br />
          - Controle de clientes e funcionários (para gerentes);
          <br />
          - Visualizar os eventos e promoções ativas do estabelecimento.
          <br />
        </Description>
        <hr />
      </WorkCard>
      <WorkCard>
        <Role>Estagiário de Desenvolvimento</Role>
        <Enterprise>Universidade Federal do Ceará</Enterprise>
        <div>
          <FaCalendarAlt />
          <Description>Abril 2021 - Atual</Description>
        </div>
        <Description>
          Criação do website do Departamento de Engenharia de Transportes usando
          wordpress, e criação de software Java para o laboratório de
          topografia.
        </Description>
        <hr />
      </WorkCard>
    </PageContent>
  );
};
