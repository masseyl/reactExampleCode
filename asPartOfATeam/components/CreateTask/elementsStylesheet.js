import { StyleSheet } from 'react-native';
import { colors } from '../../assets/styles/global';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 57
  },
  addButton: {
    flex: 0.1,
    marginRight: 10
  },
  itemContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  itemBox: {
    marginBottom: 20,
    marginRight: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    height: 29,
    borderRadius: 20,
    borderColor: colors.pillBorder,
    borderWidth: 2,
    backgroundColor: '#FFFFFF'
  },
  itemText: {
    marginHorizontal: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
    color: '#000000'
  },
  addAttribute: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.greyBackground,
    borderRadius: 17,
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    marginVertical: 5
  },
  icon: {
    overflow: 'visible',
    alignSelf: 'center',
    marginRight: 15
  },
  label: {
    height: 22,
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 22,
    color: colors.primary
  },
  removeItem: {
    flex: 0,
    marginRight: 10
  },
  removeIcon: {
    height: 8,
    width: 8
  },
  verticalDivider: {
    marginHorizontal: 4,
    width: 1,
    height: 25,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.secondary
  }
});

export default styles;
