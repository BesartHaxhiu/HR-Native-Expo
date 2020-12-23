import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,Image,TextInput, View } from 'react-native';
import AppButton from './components/AppButton';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>App</Text>

        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://cdn.discordapp.com/attachments/587590336734298128/758969003175313428/1557383287.png',
        }}
        />

        <TextInput 
          placeholder="email"
          style={styles.input}
        />
        
        <TextInput 
          placeholder="password"
          secureTextEntry={true}
          style={styles.input}
        />

        <AppButton title="Log in" />

        <Text style={styles.forgotPassword}>Forgot your password?</Text>
        <Text style={{color: 'blue'}}
          onPress={() => Linking.openURL('https://hr.starlabs.dev/login')}>
        Starlabs HR
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '400',
    color: 'white',
    fontSize: 15
  },
  input:{
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: 200,
    margin: 5
  },
  tinyLogo: {
    width: 200,
    height: 200
  },
  login: {
    borderWidth: 1,
    margin: 15,
    borderColor: 'purple',
    color: 'purple'
  },
  forgotPassword: {
    textTransform: 'capitalize',
    color: 'black',
    marginTop: 15
  }
});
