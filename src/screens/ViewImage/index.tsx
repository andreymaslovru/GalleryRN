import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {RootP, RootRouteProp} from '../../navigation/Router/interface';
import {removeToFavorite, toggleToFavorite} from '../../store/photos/actions';
import {showToast} from '../../utils/showToast';
import {ImageWatchView} from './View';

interface ImageWatchProps {
  route: RootRouteProp<RootP.viewImage>;
}

export const ImageWatch: React.FC<ImageWatchProps> = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const item = route.params.item;

  const addFavorite = (id: number, status: boolean) => {
    dispatch(toggleToFavorite(id));
    showToast(
      status
        ? 'Изображение удалено из избранного'
        : 'Изображение успешно добавлено в избранное',
    );
    navigation.goBack();
  };

  const removeImage = (id: number) => {
    dispatch(removeToFavorite(id));
    showToast('Изображение успешно удалено');
    navigation.goBack();
  };

  return (
    <ImageWatchView
      photoInfo={item}
      removeImage={removeImage}
      addFavorite={addFavorite}
    />
  );
};
