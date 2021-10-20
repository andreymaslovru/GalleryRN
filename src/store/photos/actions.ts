import axios from 'axios';
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

export const toggleToFavorite = (id: number) =>
  <const>{
    type: 'TOGGLE_TO_FAVORITE',
    id,
  };

export const removeToFavorite = (id: number) =>
  <const>{
    type: 'REMOVE_TO_FAVORITE',
    id,
  };

export const getPhotos = (): AppThunk => async dispatch => {
  dispatch(photosIsLoading(true));
  try {
    const response = await axios.get<TypeResponse>('https://pixabay.com/api/', {
      params: {
        key: '23926523-f17af8d65895f2b1c4bb3a756',
        q: 'yellow+flowers',
        image_type: 'photo',
        per_page: 55,
      },
    });
    dispatch(fetchPhotos(response.data.hits));
    dispatch(photosIsLoading(false));
  } catch (error) {
    dispatch(photosIsLoading(false));
    console.log('receiveFavorites error:', error);
  }
};
