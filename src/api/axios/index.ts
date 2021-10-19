import axiosPackage from 'axios';

export enum axiosVariable {
  ACCESS_KEY = '23926523-f17af8d65895f2b1c4bb3a756',
}

export const baseURL =
  'https://pixabay.com/api/?key=' + axiosVariable.ACCESS_KEY;

export const axios = axiosPackage.create({
  headers: {},
  baseURL,
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  function (error) {
    // Do something with response error
    console.log('axios error', error, error.response);
    // if (error?.response?.data?.message)

    return Promise.reject(error.response);
  },
);
