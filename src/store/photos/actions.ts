import axios from 'axios';

import {axiosVariable, baseURL} from '../../api';
import {Photo, TypeResponse} from '../../api/types';
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

export const getPhotos =
  (per_page: number = 50): AppThunk =>
  async dispatch => {
    dispatch(photosIsLoading(true));
    try {
      const response = await axios.get<TypeResponse>(baseURL, {
        params: {
          key: axiosVariable.ACCESS_KEY,
          q: axiosVariable.TYPE,
          image_type: axiosVariable.IMAGE_TYPE,
          per_page: per_page,
        },
      });
      dispatch(fetchPhotos(response.data.hits));
      dispatch(photosIsLoading(false));
    } catch (error) {
      dispatch(photosIsLoading(false));
      console.log('receiveFavorites error:', error);
    }
  };
