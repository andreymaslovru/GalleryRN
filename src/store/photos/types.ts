import {Photo} from '../../screens/HomeScreen';
import {
  toggleToFavorite,
  fetchPhotos,
  photosIsLoading,
  removeToFavorite,
} from './actions';

export type PhotosReducer = {
  photos: {
    photo: Photo;
    isFavorite: boolean;
  }[];
  isLoading: boolean;
};

export type PhotosAction =
  | ReturnType<typeof photosIsLoading>
  | ReturnType<typeof fetchPhotos>
  | ReturnType<typeof toggleToFavorite>
  | ReturnType<typeof removeToFavorite>;
