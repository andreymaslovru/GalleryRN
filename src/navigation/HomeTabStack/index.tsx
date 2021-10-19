import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeP, HomeStackParamList} from './interface';
import {HomeScreeen} from '../../screens/HomeScreen';

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeTabStack: React.FC = ({}) => {
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
