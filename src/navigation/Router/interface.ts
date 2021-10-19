import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {TabsParamList} from '../Tabs/interface';

export enum RootP {
  //auth = 'Auth',
  app = 'App',
}

export type RootStackParamList = {
  //[RootP.auth]: undefined;
  [RootP.app]: NavigatorScreenParams<TabsParamList>;
};

export type RootNavigationProp<P extends RootP> = StackNavigationProp<
  RootStackParamList,
  P
>;

export type RootRouteProp<P extends RootP> = RouteProp<RootStackParamList, P>;
