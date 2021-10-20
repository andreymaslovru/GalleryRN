import {Reducer} from 'redux';
import {PhotosAction, PhotosReducer} from './types';

const initialState: PhotosReducer = {
  hits: [
    {
      collections: 1,
      comments: 1,
      downloads: 1,
      id: 1,
      imageHeight: 1,
      imageSize: 1,
      imageWidth: 1,
      largeImageURL: '',
      likes: 1,
      pageURL: '',
      previewHeight: 1,
      previewURL: '',
      previewWidth: '',
      tags: [''],
      type: '',
      user: '',
      userImageURL: '',
      user_id: 1,
      views: 1,
      webformatHeight: 1,
      webformatURL: '',
      webformatWidth: '',
    },
  ],
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
        hits: action.photos,
      };

    default:
      return state;
  }
};
