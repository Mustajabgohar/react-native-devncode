import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const Header = (props) => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: 'darkslateblue',

    padding: 15,
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});

export default Header;
