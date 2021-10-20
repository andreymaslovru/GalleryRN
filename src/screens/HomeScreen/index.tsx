import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {ImagesContainer} from '../../container/ImagesContainer';
import {Store} from '../../store/types';

interface HomeScreenProps {}

export type Photo = {
  collections?: number;
  comments?: number;
  downloads?: number;
  id?: number;
  imageHeight?: number;
  imageSize?: number;
  imageWidth?: number;
  largeImageURL?: string;
  likes?: number;
  pageURL?: string;
  previewHeight?: number;
  previewURL?: string;
  previewWidth?: string;
  tags?: string[];
  type?: string;
  user?: string;
  userImageURL?: string;
  user_id?: number;
  views?: number;
  webformatHeight?: number;
  webformatURL?: string;
  webformatWidth?: string;
};

export type TypeResponse = {
  hits: Photo[];
  total: number;
  totalHits: number;
};

export const HomeScreeen: React.FC<HomeScreenProps> = () => {
  const isLoading = useSelector((store: Store) => store.photos.isLoading);
  const data = useSelector((store: Store) => store.photos.photos);
  console.log(isLoading);

  if (isLoading) {
    return <ActivityIndicator color={'black'} />;
  }

  return <ImagesContainer data={data} />;
};
