import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootP, RootStackParamList} from './interface';
import {TabNavigator} from '../Tabs';

const MainStack = createStackNavigator<RootStackParamList>();

export const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name={RootP.app}
          component={TabNavigator}
          options={{headerShown: false}}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
