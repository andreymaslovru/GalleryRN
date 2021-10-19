import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FavoriteP, FavoriteStackParamList} from './interface';
import {FavoriteScreeen} from '../../screens/FavoriteScreen';

const Stack = createStackNavigator<FavoriteStackParamList>();

export const FavoriteTabStack: React.FC = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        //headerRight: () => <HeaderRightSide />,
        //headerStyle: [defaultHeaderStyle, styles.shadow],
        headerTitle: () => null,
        headerTitleAlign: 'center',
        //headerBackImage: () => <HeaderGoBack />,
      }}>
      <Stack.Screen
        name={FavoriteP.favorite}
        component={FavoriteScreeen}
        options={{title: FavoriteP.favorite, headerShown: false}}
      />
    </Stack.Navigator>
  );
};
