import React from 'react';
import {useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';

import {ImagesContainer} from '../../container/ImagesContainer';
import {Store} from '../../store/types';

interface HomeScreenProps {}

export const HomeScreeen: React.FC<HomeScreenProps> = () => {
  const isLoading = useSelector((store: Store) => store.photos.isLoading);
  const data = useSelector((store: Store) => store.photos.photos);

  if (isLoading) {
    return <ActivityIndicator color={'black'} />;
  }

  return <ImagesContainer data={data} />;
};
