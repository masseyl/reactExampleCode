import { StyleSheet, Dimensions } from 'react-native';
import { colors, sizes } from '../../../assets/styles/global';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    height: sizes.bottomTabHeight,
    width,
    backgroundColor: colors.primary
  },
  creationButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  creationButtonText: {
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: -0.19,
    color: '#ffffff'
  }
});

export default styles;
