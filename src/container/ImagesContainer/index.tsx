import React from 'react';
import {View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {RootP} from '../../navigation/Router/interface';
import {Photo} from '../../api/types';
import {styles} from './styles';
import {PreviousImage} from '../../components/PreviousImage';

export type photoObject = {
  photo: Photo;
  isFavorite: boolean;
};

interface ImagesContainerProps {
  data: photoObject[];
}

export const ImagesContainer: React.FC<ImagesContainerProps> = ({data}) => {
  const navigation = useNavigation();
  const goImage = (item: photoObject) => {
    //@ts-ignore
    navigation.navigate(RootP.viewImage, {item});
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map(item => {
          return (
            <PreviousImage
              photoInfo={item}
              goImage={() => goImage(item)}
              key={item.photo.id + item.photo.previewURL}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};
