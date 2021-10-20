import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {RootP, RootRouteProp} from '../../navigation/Router/interface';
import {removeToFavorite, toggleToFavorite} from '../../store/photos/actions';
import {showToast} from '../../utils/showToast';
import {styles} from './styles';

interface ViewImageProps {
  route: RootRouteProp<RootP.viewImage>;
}

export const ViewImage: React.FC<ViewImageProps> = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const item = route.params.item;
  const isFavorite = route.params.isFavorite;
  console.log(item.id, 'item');

  const addFav = (id: number) => {
    dispatch(toggleToFavorite(id));
    showToast('Изображение успешно добавлено в избранное');
    navigation.goBack();
  };

  const removeFav = (id: number) => {
    dispatch(removeToFavorite(id));
    showToast('Изображение успешно удалено');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.containerForImage}
        source={{
          uri: `${item.largeImageURL}`,
        }}
      />

      <View style={styles.modal}>
        <TouchableOpacity
          style={styles.strAction}
          onPress={() => addFav(item.id)}>
          <Text>
            {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeFav(item.id)}>
          <Text>Удалить изображение</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
