import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../assets/styles/global';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: 22
  },
  btnTextConfirm: {
    color: colors.primary
  },
  datePickerCon: {
    width,
    position: 'absolute',
    bottom: height / 3
  }
});

export default styles;
