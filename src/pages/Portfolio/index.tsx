import React, { useEffect, useState } from 'react';
import {
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaReact,
} from 'react-icons/fa';
import { SiCss3, SiTypescript } from 'react-icons/si';
import { GiHastyGrave } from 'react-icons/gi';
import { NotFound } from '../../components/NotFound';
import { PageContent } from '../../components/PageContent';
import { getProjects, ProjectData } from '../../services/projects.service';
import { ImageContent, InfoContent, Project, Technologies } from './styles';

export const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    getProjects().then(result => setProjects(result.data));
  }, []);

  return (
    <PageContent>
      {projects.length > 0 ? (
        projects.map(project => (
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
        <NotFound
          message="Projects not found!"
          Icon={GiHastyGrave}
          iconSize={32}
        />
      )}
    </PageContent>
  );
};
