import {StackNavigationProp} from '@react-navigation/stack';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';

import {Tabs, TabsNavigationProp} from '../Tabs/interface';

export enum FavoriteP {
  favorite = 'Favorite',
}

export type FavoriteStackParamList = {
  [FavoriteP.favorite]: undefined;
};

export type FavoriteNavigationProp<P extends FavoriteP> =
  CompositeNavigationProp<
    StackNavigationProp<FavoriteStackParamList, P>,
    TabsNavigationProp<Tabs.favoriteTab>
  >;

export type FavoriteRouteProp<P extends FavoriteP> = RouteProp<
  FavoriteStackParamList,
  P
>;
