import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import Todo from './Todo.js';

const TodoList = () => {
  const [todoList, setToDo] = useState([
    'Add banner to homepage',
    'Demo class at Saturday',
  ]);

  const showList = () => {
    console.log(`In fucction`);
    return todoList.map((item) => {
      console.log(`item : ${item}`);
      return (
        <View key={item} style={styles.list_view}>
          <Text style={styles.list_text}>{item}</Text>
          <Button
            title="Delete"
            onPress={() =>
              setToDo((prev) => {
                return prev.filter((todo) => todo != item);
              })
            }
          />
        </View>
      );
    });
  };

  const addHandler = (text) => {
    setToDo((prev) => {
      return [text, ...prev];
    });
  };

  return (
    <View style={styles.todo}>
      <Todo add={addHandler} />
      {showList()}
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    marginTop: 30,
  },
  list_text: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 250,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
  },

  list_view: {
    flexDirection: 'row',
  },
});

export default TodoList;
