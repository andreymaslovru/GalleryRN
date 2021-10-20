import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  containerForImage: {
    borderRadius: 18,
    width: 81,
    height: 81,
    backgroundColor: '#C4C4C4',
    marginBottom: 16,
    position: 'relative',
  },
  iconHeart: {
    position: 'absolute',
    bottom: 22,
    left: 8,
  },
});
