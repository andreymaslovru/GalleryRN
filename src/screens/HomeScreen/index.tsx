import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  View,
  ActivityIndicator,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootP} from '../../navigation/Router/interface';
import {Store} from '../../store/types';
import {styles} from './styles';

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
  const navigation = useNavigation();
  const isLoading = useSelector((store: Store) => store.photos.isLoading);
  const data = useSelector((store: Store) => store.photos.hits);
  console.log(isLoading);

  if (isLoading) {
    return <ActivityIndicator color={'black'} />;
  }

  const pressable = (item: Photo) => {
    console.log(item.id);
    navigation.navigate(RootP.viewImage, {item});
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map(item => {
          return (
            <TouchableOpacity
              onPress={() => pressable(item)}
              key={item.user_id + item.id}>
              <Image
                style={styles.containerForImage}
                source={{
                  uri: `${item.previewURL}`,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};
