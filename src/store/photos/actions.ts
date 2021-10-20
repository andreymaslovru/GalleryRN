import axios from 'axios';
import {baseURL} from '../../api/axios';
import {Photo, TypeResponse} from '../../screens/HomeScreen';
import {AppThunk} from '../types';

export const photosIsLoading = (status: boolean) =>
  <const>{
    type: 'PHOTOS_IS_LOADING',
    status,
  };

export const fetchPhotos = (photos: Photo[]) =>
  <const>{
    type: 'FETCH_PHOTOS',
    photos,
  };

export const fetchhh = () => {
  return axios.get<TypeResponse>(`${baseURL}`).then(res => {
    return res;
  });
};

export const getPhotos = (): AppThunk => async dispatch => {
  dispatch(photosIsLoading(true));
  try {
    //const response = await axios.get<TypeResponse>(`${baseURL}`);
    //https://pixabay.com/api/?key=23926523-f17af8d65895f2b1c4bb3a756&q=yellow+flowers&image_type=photo
    const response = await axios.get<TypeResponse>('https://pixabay.com/api/', {
      params: {
        key: '23926523-f17af8d65895f2b1c4bb3a756',
        q: 'yellow+flowers',
        image_type: 'photo',
      },
    });
    console.log('====================================');
    console.log(response);
    console.log('====================================');
    dispatch(fetchPhotos(response.data.hits));
    dispatch(photosIsLoading(false));
  } catch (error) {
    dispatch(photosIsLoading(false));
    console.log('receiveFavorites error:', error);
  }
};
