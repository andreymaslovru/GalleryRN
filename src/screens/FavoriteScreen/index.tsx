import React from 'react';
import {useSelector} from 'react-redux';
import {ImagesContainer} from '../../container/ImagesContainer';
import {Store} from '../../store/types';

interface FavoriteScreeenProps {}

export const FavoriteScreeen: React.FC<FavoriteScreeenProps> = () => {
  const data = useSelector((store: Store) => store.photos.photos);
  const favorites = data.filter(item => item.isFavorite === true);

  return <ImagesContainer data={favorites} />;
};
