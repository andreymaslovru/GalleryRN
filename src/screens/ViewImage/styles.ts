import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    position: 'relative',
  },
  containerForImage: {
    width: '100%',
    height: '40%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#C4C4C4',
  },

  modal: {
    position: 'absolute',
    bottom: 32,
    height: 85,
    width: '90%',
    borderRadius: 20,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  strAction: {},
});
