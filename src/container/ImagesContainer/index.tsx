import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, ScrollView, TouchableOpacity, Image} from 'react-native';
import {RootP} from '../../navigation/Router/interface';
import {Photo} from '../../screens/HomeScreen';
import {styles} from './styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

export type photoObject = {
  photo: Photo;
  isFavorite: boolean;
};

interface ImagesContainerProps {
  data: photoObject[];
}

export const ImagesContainer: React.FC<ImagesContainerProps> = ({data}) => {
  const navigation = useNavigation();
  const pressable = (item: photoObject) => {
    //@ts-ignore
    navigation.navigate(RootP.viewImage, {item});
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map(item => {
          return (
            <TouchableOpacity
              onPress={() => pressable(item)}
              key={item.photo.id + item.photo.previewURL}>
              <Image
                style={styles.containerForImage}
                source={{
                  uri: `${item.photo.previewURL}`,
                }}
              />
              {item.isFavorite && (
                <IconAntDesign
                  style={styles.iconHeart}
                  name="heart"
                  size={16}
                  color={item.isFavorite ? 'red' : 'black'}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};
