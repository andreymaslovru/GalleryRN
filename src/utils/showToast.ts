import {Platform, ToastAndroid} from 'react-native';
import Toast from 'react-native-simple-toast';

export const showToast = (text: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.showWithGravity(text, ToastAndroid.LONG, ToastAndroid.BOTTOM);
  } else {
    Toast.showWithGravity(text, Toast.LONG, Toast.TOP);
  }
};
