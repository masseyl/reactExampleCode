import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  dueDateContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dueDate: {
    paddingHorizontal: 6,
    fontSize: 9,
    fontFamily: 'OpenSans-Semibold'
  }
});

export default styles;
