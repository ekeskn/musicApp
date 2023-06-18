import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  image: {width: 100, height: 100, borderRadius: 50},
  upper_container: {flex: 1, padding: 10},
  title: {fontWeight: 'bold', fontSize: 20, color: 'black', marginBottom: 6},
  lower_container: {flexDirection: 'row', justifyContent: 'space-between'},
  contents: {flexDirection: 'row'},
  artist: {marginRight: 10},
  year: {fontStyle: 'italic'},
  sold_out: {
    color: 'red',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 10,
    borderColor: 'red',
    padding: 2,
  },
});
