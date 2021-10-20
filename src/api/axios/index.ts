//import axiosPackage from 'axios';

export enum axiosVariable {
  ACCESS_KEY = '23926523-f17af8d65895f2b1c4bb3a756',
  TYPE = 'yellow+flowers',
  IMAGE_TYPE = 'photo',
}

export const baseURL =
  'https://pixabay.com/api/?key=23926523-f17af8d65895f2b1c4bb3a756&q=yellow+flowers&image_type=photo';
//'https://pixabay.com/api/?key=23926523-f17af8d65895f2b1c4bb3a756&q=yellow+flowers&image_type=photo';

// export const axios = axiosPackage.create({
//   params: {
//     key: axiosVariable.ACCESS_KEY,
//     q: axiosVariable.TYPE,
//     image_type: axiosVariable.IMAGE_TYPE,
//     per_page: 50,
//   },
//   baseURL,
// });

// axios.interceptors.response.use(
//   response => {
//     return response;
//   },
//   function (error) {
//     console.log('axios error', error, error.response);

//     return Promise.reject(error.response);
//   },
// );
