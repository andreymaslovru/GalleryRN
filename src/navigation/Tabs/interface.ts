import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import {HomeStackParamList} from '../HomeTabStack/interface';
import {RootNavigationProp, RootP} from '../Router/interface';
import {FavoriteStackParamList} from '../FavoriteTabStack/interface';

export enum Tabs {
  homeTab = 'Галерея',
  favoriteTab = 'Избранное',
}

export type TabsParamList = {
  [Tabs.homeTab]: NavigatorScreenParams<HomeStackParamList>;
  [Tabs.favoriteTab]: NavigatorScreenParams<FavoriteStackParamList>;
};

export type TabsNavigationProp<P extends Tabs> = CompositeNavigationProp<
  RootNavigationProp<RootP.app>,
  BottomTabNavigationProp<TabsParamList, P>
>;
export type TabsRouteProp<P extends Tabs> = RouteProp<TabsParamList, P>;
