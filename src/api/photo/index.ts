import axios from 'axios';
import {baseURL} from '../axios';

export const getPhotos = () => {
  return axios.get(`${baseURL}`);
};
