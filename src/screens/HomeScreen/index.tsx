import axios from 'axios';
import React, {useEffect, useState} from 'react';
import _ from 'underscore';
import {
  View,
  Text,
  Image,
  ActivityIndicatorBase,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {baseURL} from '../../api/axios';
import {PreviousImage} from '../../components/PreviousImage';
import {
  fetchhh,
  fetchPhotos,
  getPhotos,
  photosIsLoading,
} from '../../store/photos/actions';
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
  //const dispatch = useDispatch();
  //const [photos, setPhotos] = useState<Photo[] | []>([]);

  //dispatch(getPhotos());

  const isLoading = useSelector((store: Store) => store.photos.isLoading);
  //console.log(photosDefault.hits, photosDefault.isLoading);
  return (
    <View>
      <Text>HOME SCREEN</Text>
      <PreviousImage />
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2015/08/13/20/06/flower-887443_150.jpg',
        }}
      />
    </View>
  );
};
