import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Tabs} from './interface';
import {HomeTabStack} from '../HomeTabStack';
import {FavoriteTabStack} from '../FavoriteTabStack';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

enum topTitle {
  homeTitle = 'Все изображения',
  favoriteTitle = 'Избранное',
}

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Tabs.homeTab}
      //@ts-ignore
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#A10D99',
        tabStyle: {
          paddingTop: 10,
        },
      }}>
      <Tab.Screen
        component={HomeTabStack}
        name={Tabs.homeTab}
        options={{
          headerTitle: topTitle.homeTitle,
          tabBarIcon: ({focused}) => (
            <IconAntDesign
              name="home"
              size={24}
              color={focused ? '#A10D99' : '#949494'}
            />
          ),
        }}
      />
      <Tab.Screen
        component={FavoriteTabStack}
        name={Tabs.favoriteTab}
        options={{
          headerTitle: topTitle.favoriteTitle,
          tabBarIcon: ({focused}) => (
            <IconAntDesign
              name="staro"
              size={24}
              color={focused ? '#A10D99' : '#949494'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
