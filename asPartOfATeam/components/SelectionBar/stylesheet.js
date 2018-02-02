import { StyleSheet, Dimensions } from 'react-native';
import { colors, sizes } from '../../assets/styles/global';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBackground,
    zIndex: 1
  },
  createTaskSelector: {
    position: 'absolute',
    bottom: sizes.bottomTabHeight,
    paddingBottom: 23
  },
  modalScrim: {
    position: 'absolute',
    bottom: sizes.bottomTabHeight,
    width,
    height,
    backgroundColor: 'rgba(255,255,255,.95)'
  },
  selectionBarContainer: {
    height: sizes.bottomTabHeight + 3,
    width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.tabBar
  },
  taskIconContainer: {
    maxWidth: 24,
    maxHeight: 27,
    marginTop: 10
  },
  taskIcon: {
    maxWidth: 24,
    maxHeight: 27
  },
  taskIconText: {
    width: 50,
    marginLeft: -12.5,
    fontFamily: 'OpenSans-Bold',
    fontSize: 8,
    textAlign: 'center',
    color: colors.textDarkGrey
  },
  createIconContainer: {
    marginTop: -21
  },
  createTaskIcon: {
    alignSelf: 'baseline'
  }
});

export default styles;
