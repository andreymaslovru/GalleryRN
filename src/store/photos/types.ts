import {Photo} from '../../screens/HomeScreen';
import {fetchPhotos, photosIsLoading} from './actions';

export type PhotosReducer = {
  hits: Photo[];
  isLoading: boolean;
};

export type PhotosAction =
  | ReturnType<typeof photosIsLoading>
  | ReturnType<typeof fetchPhotos>;
