import { AxiosResponse } from 'axios';
import { api } from './api';

const baseUrl = '/projects';

export type ProjectData = {
  id: string;
  name: string;
  about: string;
  urlImg: string;
  functionalities: string;
  technologies: string;
};

export type ProjectRequest = {
  name: string;
  about: string;
  urlImg: string;
  functionalities: string;
  technologies: string;
};

export const getProjects = async (): Promise<AxiosResponse> => {
  return api
    .get(baseUrl)
    .then(result => Promise.resolve(result))
    .catch(e => Promise.reject(e));
};

export const createProject = async (
  body: ProjectRequest,
): Promise<AxiosResponse> => {
  return api
    .post(baseUrl, body)
    .then(result => Promise.resolve(result))
    .catch(e => Promise.reject(e));
};
