import {View, TextInput, Text, Switch} from 'react-native';
import React from 'react';

const SearchBar = (props) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: 'grey',
        margin: 5,
        height: 40,
        borderRadius: 10,
      }}>
      <TextInput
        placeholder="Search.."
        onChangeText={props.onSearch}
      />
    </View>
  );
};

export default SearchBar;
