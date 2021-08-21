import { AxiosResponse } from 'axios';
import { api } from './api';

const baseUrl = '/worksExperience';

export type WorksExperience = {
  id: string;
  role: string;
  enterprise: string;
  admission: Date;
  demission: Date;
};

export const getWorksExperience = async (): Promise<AxiosResponse> => {
  return api
    .get(baseUrl)
    .then(result => Promise.resolve(result))
    .catch(e => Promise.reject(e));
};
