import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
    backgroundColor: 'lightblue',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commonText: {
    fontSize: 30,
    textAlign: 'center',
  },
  headerText: {
    fontSize: 40,
    textAlign: 'center',
    color: 'violet',
    textDecorationLine: 'underline',
    marginVertical: '10%',
  },
  marginView: {
    marginHorizontal: '10%',
    marginBottom: '10%',
  },
  inputView: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'green',
    width: '20%',
  },
  resetView: {
    backgroundColor: 'orange',
    color: 'white',
    padding: '2%',
    borderRadius: 10,
  },
  startView: {
    backgroundColor: 'lightgreen',
    color: 'white',
    padding: '2%',
    borderRadius: 10,
  },
  commonButtonView: {
    borderRadius: 10,
    borderColor: 'blue',
    borderWidth: 2,
  },
  topTextView: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
