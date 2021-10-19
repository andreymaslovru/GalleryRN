import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Tabs} from './interface';
import {HomeTabStack} from '../HomeTabStack';
import {FavoriteTabStack} from '../FavoriteTabStack';

const Tab = createBottomTabNavigator();

enum topTitle {
  homeTitle = 'Все изображения',
  favoriteTitle = 'Избранное',
}

export const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={Tabs.homeTab}>
      <Tab.Screen
        component={HomeTabStack}
        name={Tabs.homeTab}
        options={{headerTitle: topTitle.homeTitle}}
      />
      <Tab.Screen
        component={FavoriteTabStack}
        name={Tabs.favoriteTab}
        options={{headerTitle: topTitle.favoriteTitle}}
      />
    </Tab.Navigator>
  );
};
