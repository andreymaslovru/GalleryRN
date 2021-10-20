import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {RootP, RootRouteProp} from '../../navigation/Router/interface';
import {removeToFavorite, toggleToFavorite} from '../../store/photos/actions';
import {showToast} from '../../utils/showToast';
import {styles} from './styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

interface ViewImageProps {
  route: RootRouteProp<RootP.viewImage>;
}

export const ViewImage: React.FC<ViewImageProps> = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const item = route.params.item;

  const addFav = (id: number, status: boolean) => {
    dispatch(toggleToFavorite(id));
    showToast(
      status
        ? 'Изображение удалено из избранного'
        : 'Изображение успешно добавлено в избранное',
    );
    navigation.goBack();
  };

  const removeFav = (id: number) => {
    dispatch(removeToFavorite(id));
    showToast('Изображение успешно удалено');
    navigation.goBack();
  };

  return (
    <View style={styles().container}>
      <Image
        style={
          styles(item.photo.webformatWidth, item.photo.webformatHeight)
            .containerForImage
        }
        source={{
          uri: `${item.photo.largeImageURL}`,
        }}
      />

      <View style={styles().modal}>
        <TouchableOpacity
          style={styles().strAction}
          onPress={() => addFav(item.photo.id, item.isFavorite)}>
          <IconAntDesign
            name="heart"
            size={20}
            color={item.isFavorite ? 'red' : 'black'}
          />
          <Text>
            {item.isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles().strAction}
          onPress={() => removeFav(item.photo.id)}>
          <IconAntDesign name="delete" size={20} />
          <Text>Удалить изображение</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
