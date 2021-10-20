import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import {photoObject} from '../../../container/ImagesContainer';
import {styles} from './styles';

interface ImageWatchViewProps {
  photoInfo: photoObject;
  removeImage: (id: number) => void;
  addFavorite: (id: number, status: boolean) => void;
}

export const ImageWatchView: React.FC<ImageWatchViewProps> = ({
  photoInfo,
  removeImage,
  addFavorite,
}) => {
  return (
    <View style={styles().container}>
      <Image
        style={
          styles(
            photoInfo.photo.webformatWidth,
            photoInfo.photo.webformatHeight,
          ).containerForImage
        }
        source={{
          uri: `${photoInfo.photo.largeImageURL}`,
        }}
      />

      <View style={styles().modal}>
        <TouchableOpacity
          style={styles().strAction}
          onPress={() => addFavorite(photoInfo.photo.id, photoInfo.isFavorite)}>
          <IconAntDesign
            name="heart"
            size={20}
            color={photoInfo.isFavorite ? 'red' : 'black'}
          />
          <Text>
            {photoInfo.isFavorite
              ? 'Удалить из избранного'
              : 'Добавить в избранное'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles().strAction}
          onPress={() => removeImage(photoInfo.photo.id)}>
          <IconAntDesign name="delete" size={20} />
          <Text>Удалить изображение</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
