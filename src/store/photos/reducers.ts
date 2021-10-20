import {Reducer} from 'redux';
import {PhotosAction, PhotosReducer} from './types';

const initialState: PhotosReducer = {
  photos: [],
  isLoading: false,
};

export const photos: Reducer<PhotosReducer, PhotosAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'PHOTOS_IS_LOADING':
      return {
        ...state,
        isLoading: action.status,
      };

    case 'FETCH_PHOTOS':
      return {
        ...state,
        photos: action.photos.map(item => {
          return {
            photo: item,
            isFavorite: false,
          };
        }),
      };

    case 'TOGGLE_TO_FAVORITE':
      return {
        ...state,
        photos: state.photos.map(item => {
          if (item.photo.id === action.id) {
            return {
              photo: item.photo,
              isFavorite: !item.isFavorite,
            };
          } else {
            return item;
          }
        }),
      };

    case 'REMOVE_TO_FAVORITE':
      return {
        ...state,
        photos: state.photos.filter(item => item.photo.id !== action.id),
      };

    default:
      return state;
  }
};
