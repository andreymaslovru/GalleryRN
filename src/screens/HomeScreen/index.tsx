import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {PreviousImage} from '../../components/PreviousImage';

interface HomeScreenProps {}

type Photo = {
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

type TypeResponse = {
  hits: Photo[];
  total: number;
  totalHits: number;
};

export const HomeScreeen: React.FC<HomeScreenProps> = () => {
  const [photos, setPhotos] = useState<Photo[] | []>([]);
  useEffect(() => {
    axios
      .get<TypeResponse>(
        'https://pixabay.com/api/?key=23926523-f17af8d65895f2b1c4bb3a756&q=yellow+flowers&image_type=photo',
      )
      .then(res => {
        setPhotos(res.data.hits);
      });
  }, []);

  //console.log(photos[0].previewURL);

  return (
    <View>
      <Text>HOME SCREEN</Text>
      <PreviousImage />
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2015/08/13/20/06/flower-887443_150.jpg',
        }}
      />
    </View>
  );
};
