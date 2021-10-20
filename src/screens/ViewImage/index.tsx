import React from 'react';
import {View, Image, Text} from 'react-native';
import {RootP, RootRouteProp} from '../../navigation/Router/interface';
import {styles} from './styles';

interface ViewImageProps {
  route: RootRouteProp<RootP.viewImage>;
}

export const ViewImage: React.FC<ViewImageProps> = ({route}) => {
  const item = route.params.item;
  console.log(item.id, 'item');

  return (
    <View style={styles.container}>
      <Image
        style={styles.containerForImage}
        source={{
          uri: `${item.largeImageURL}`,
        }}
      />

      <View style={styles.modal}>
        <View style={styles.strAction}>
          <Text>Добавить в избранное</Text>
        </View>
        <View>
          <Text>Удалить изображение</Text>
        </View>
      </View>
    </View>
  );
};
