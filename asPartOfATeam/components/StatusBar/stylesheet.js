import { StyleSheet } from 'react-native';
import { colors } from '../../assets/styles/global';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 999
  },
  statusBar: {
    backgroundColor: colors.darkText,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 17,
    height: 38
  },
  statusBarText: {
    fontFamily: 'OpenSans-Semibold',
    fontSize: 13,
    color: colors.incomplete
  }
});

export default styles;
