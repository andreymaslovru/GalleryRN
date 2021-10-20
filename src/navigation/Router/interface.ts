import {StackNavigationProp} from '@react-navigation/stack';
import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';

import {photoObject} from '../../container/ImagesContainer';
import {TabsParamList} from '../Tabs/interface';

export enum RootP {
  viewImage = 'ViewImage',
  app = 'App',
}

export type RootStackParamList = {
  [RootP.viewImage]: {item: photoObject};
  [RootP.app]: NavigatorScreenParams<TabsParamList>;
};

export type RootNavigationProp<P extends RootP> = StackNavigationProp<
  RootStackParamList,
  P
>;

export type RootRouteProp<P extends RootP> = RouteProp<RootStackParamList, P>;
