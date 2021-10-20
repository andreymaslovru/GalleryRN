import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootP, RootStackParamList} from './interface';
import {TabNavigator} from '../Tabs';
import {useDispatch, useSelector} from 'react-redux';
import {Store} from '../../store/types';
import {ActivityIndicator} from 'react-native';
import {getPhotos} from '../../store/photos/actions';

const MainStack = createStackNavigator<RootStackParamList>();

export const Router: React.FC = () => {
  //const isLoading = useSelector((store: Store) => store.photos.isLoading);
  const dispatch = useDispatch();
  //const [photos, setPhotos] = useState<Photo[] | []>([]);

  dispatch(getPhotos());
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
