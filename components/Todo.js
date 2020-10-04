import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';

const Todo = ({add}) => {
  const [text, setText] = useState('Type Something');
  return (
    <View style={styles.view}>
      <TextInput
        value={text}
        style={styles.textInput}
        onChangeText={(text) => setText(text)}
      />
      <Button title="Add" onPress={() => add(text)} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderBottomColor: 'black',
    backgroundColor: 'grey',
  },
  view: {
    flexDirection: 'row',
  },
});

export default Todo;
