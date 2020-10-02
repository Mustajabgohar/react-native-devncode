/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  ImageBackground,
} from 'react-native';
import image from './images/pic1.png';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./images/pic1.png')}
        style={styles.image}>
        <View
          style={{
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold',
              fontStyle: 'italic',
              marginBottom: 15,
            }}>
            Register your account
          </Text>
          <TextInput placeholder="Name" style={styles.text_input}></TextInput>

          <TextInput placeholder="Email" style={styles.text_input}></TextInput>
          <TextInput
            placeholder="Password"
            style={styles.text_input}></TextInput>
          <TextInput
            placeholder="Confirm Password"
            style={styles.text_input}></TextInput>
          <Button
            title="Register"
            onPress={() => navigation.navigate('Details')}
            color="#d62828"
            style={{
              fontSize: 20,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text_input: {
    backgroundColor: '#f4a261',
    borderColor: 'black',
    borderRadius: 20,
    width: 250,
    borderWidth: 2,
    fontSize: 18,
    paddingLeft: 15,
    marginBottom: 5,
    opacity: 0.9,
  },
});

function DetailScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 30,
          fontStyle: 'italic',
        }}>
        Details Screen
      </Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Signup'}}
        />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
