import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Tabs, TabsNavigationProp} from '../Tabs/interface';

export enum HomeP {
  home = 'Home',
}

export type HomeStackParamList = {
  [HomeP.home]: undefined;
};

export type HomeNavigationProp<P extends HomeP> = CompositeNavigationProp<
  StackNavigationProp<HomeStackParamList, P>,
  TabsNavigationProp<Tabs.homeTab>
>;

export type HomeRouteProp<P extends HomeP> = RouteProp<HomeStackParamList, P>;
