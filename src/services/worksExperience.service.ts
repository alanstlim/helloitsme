import { AxiosResponse } from 'axios';
import { api } from './api';

const baseUrl = '/worksExperience';

export type WorksExperienceData = {
  id: string;
  role: string;
  enterprise: string;
  responsibility: string;
  admission: Date;
  demission: Date;
};

export type WorkExperienceRequest = {
  role: string;
  enterprise: string;
  responsibility: string;
  admission: Date;
  demission: Date;
};

export const getWorksExperience = async (): Promise<AxiosResponse> => {
  return api
    .get(baseUrl)
    .then(result => Promise.resolve(result))
    .catch(e => Promise.reject(e));
};

export const createProject = async (
  body: WorkExperienceRequest,
): Promise<AxiosResponse> => {
  return api
    .post(baseUrl, body)
    .then(result => Promise.resolve(result))
    .catch(e => Promise.reject(e));
};
