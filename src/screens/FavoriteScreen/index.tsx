import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {Store} from '../../store/types';

interface FavoriteScreeenProps {}

export const FavoriteScreeen: React.FC<FavoriteScreeenProps> = () => {
  const photosDefault = useSelector((store: Store) => store.photos);
  console.log(photosDefault, '111');

  return (
    <View>
      <Text>FAVORITE SCREEN</Text>
    </View>
  );
};
