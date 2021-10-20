import {StyleSheet} from 'react-native';

export const styles = (widthI?: number, heightI?: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'black',
      position: 'relative',
    },
    containerForImage: {
      width: widthI,
      height: heightI,
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
    strAction: {
      height: 30,
      width: '55%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });
