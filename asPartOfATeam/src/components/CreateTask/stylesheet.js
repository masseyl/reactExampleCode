import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../assets/styles/global';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    backgroundColor: '#000000'
  },
  createTaskButton: {
    position: 'absolute',
    bottom: 0
  },
  elementsContainer: {
    height: height - 63,
    width,
    backgroundColor: '#FFFFFF'
  },
  elements: {
    marginTop: 16,
    marginLeft: 30,
    marginRight: 40
  },
  creationButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    width,
    opacity: 0.91,
    backgroundColor: colors.textSecondary
  },
  creationButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  creationButtonText: {
    alignItems: 'center',
    textAlign: 'center'
  },
  inputText: {
    flex: 1,
    height: 24,
    alignSelf: 'stretch',
    fontFamily: 'OpenSans-Regular',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 20
  },
  mainInput: {
    height: 24,
    marginBottom: 22
  }
});

export default styles;
