import React, { useEffect, useState } from 'react';
import { Login } from '../../components/Login';
import { PageContent } from '../../components/PageContent';
import { getProjects, ProjectData } from '../../services/projects.service';
import {
  getWorksExperience,
  WorksExperienceData,
} from '../../services/worksExperience.service';
import {
  CardProject,
  CardWork,
  Category,
  Container,
  TitleCategory,
} from './styles';

export const Dashboard: React.FC = () => {
  const user = true;

  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [worksExperience, setWorksExperience] = useState<WorksExperienceData[]>(
    [],
  );

  useEffect(() => {
    getProjects().then(result => setProjects(result.data));
  }, []);

  useEffect(() => {
    getWorksExperience().then(result => setWorksExperience(result.data));
  }, []);

  return (
    <PageContent>
      {user ? (
        <Container>
          <Category>
            <TitleCategory>Work Experiences</TitleCategory>
            {worksExperience &&
              worksExperience.map(workExperience => (
                <CardWork>
                  <div>
                    <strong>{workExperience.enterprise}</strong>
                  </div>
                  <div>
                    <p>{workExperience.role}</p>
                  </div>
                  <div>
                    <p>
                      {workExperience.admission} - {workExperience.demission}
                    </p>
                  </div>
                  <div>
                    <p>Visualizar</p>
                    <p> deletar</p>
                    <p> editar</p>
                  </div>
                </CardWork>
              ))}
          </Category>
          <Category>
            <TitleCategory>Projects</TitleCategory>
            {projects &&
              projects.map(project => (
                <CardProject key={project.id}>
                  <img src={project.urlImg} alt={project.name} />
                  <strong>{project.name}</strong>
                  <p>{project.about}</p>
                  <div>
                    <p>Visualizar</p>
                    <p> deletar</p>
                    <p> editar</p>
                  </div>
                </CardProject>
              ))}
          </Category>
          <Category>
            <TitleCategory>Profile</TitleCategory>
          </Category>
        </Container>
      ) : (
        <Login />
      )}
    </PageContent>
  );
};
