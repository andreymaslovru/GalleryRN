import React from 'react';
import {useDispatch} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeP, HomeStackParamList} from './interface';
import {HomeScreeen} from '../../screens/HomeScreen';
import {getPhotos} from '../../store/photos/actions';

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeTabStack: React.FC = ({}) => {
  const dispatch = useDispatch();
  dispatch(getPhotos());

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HomeP.home}
        component={HomeScreeen}
        options={{title: HomeP.home, headerShown: false}}
      />
    </Stack.Navigator>
  );
};
