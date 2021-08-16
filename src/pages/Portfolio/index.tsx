import React, { useEffect, useState } from 'react';
import {
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaReact,
} from 'react-icons/fa';
import { SiCss3, SiTypescript } from 'react-icons/si';
import { PageContent } from '../../components/PageContent';
import { api } from '../../services/api';
import {
  Container,
  ImageContent,
  InfoContent,
  Project,
  Technologies,
} from './styles';

type ProjectData = {
  id: string;
  name: string;
  about: string;
  urlImg: string;
  functionalities: string;
  technologies: string;
};

export const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then(result => {
      setProjects(result.data);
    });
  }, []);

  return (
    <PageContent>
      <Container>
        {projects.length > 0 ? (
          projects.map((project: ProjectData) => (
            <Project key={project.id}>
              <ImageContent>
                <img src={project.urlImg} alt={project.name} />
              </ImageContent>
              <InfoContent>
                <div>
                  <h2> - {project.name} - </h2>
                  <h2>About :</h2>
                  <h4>{project.about}</h4>
                </div>
                <div>
                  <h2>Functionalities :</h2>
                  <h4>{project.functionalities}</h4>
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
          ))
        ) : (
          <h2>Not found any project.</h2>
        )}
      </Container>
    </PageContent>
  );
};
