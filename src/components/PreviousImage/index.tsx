import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {photoObject} from '../../container/ImagesContainer';

import {styles} from './styles';

interface PreviousImageProps {
  photoInfo: photoObject;
  goImage: () => void;
}

export const PreviousImage: React.FC<PreviousImageProps> = ({
  photoInfo,
  goImage,
}) => {
  return (
    <TouchableOpacity onPress={goImage}>
      <Image
        style={styles.containerForImage}
        source={{
          uri: `${photoInfo.photo.previewURL}`,
        }}
      />
      {photoInfo.isFavorite && (
        <IconAntDesign
          style={styles.iconHeart}
          name="heart"
          size={16}
          color={photoInfo.isFavorite ? 'red' : 'black'}
        />
      )}
    </TouchableOpacity>
  );
};
