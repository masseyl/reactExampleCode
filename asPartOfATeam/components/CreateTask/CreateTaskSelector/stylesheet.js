import { StyleSheet, Dimensions } from 'react-native';
import { colors, sizes } from '../../../assets/styles/global';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: sizes.bottomTabHeight,
    width
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 50
  },
  createText: {
    textAlign: 'center',
    fontFamily: 'OpenSans-Semibold',
    fontSize: 17,
    lineHeight: 24,
    color: colors.textPrimary,
    marginBottom: 20
  },
  creationButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary
  },
  label: {
    textAlign: 'center',
    fontFamily: 'OpenSans-Semibold',
    fontSize: 12,
    color: colors.warmGrey
  }
});

export default styles;
