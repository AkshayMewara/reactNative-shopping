import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ToastAndroid,
  ImageBackground
} from 'react-native';
import axios from 'axios';

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const homeHandler = () => {
    navigation.navigate('HomeCheck');
  };

  const registerHandler = () => {
    navigation.navigate('Register');
  };

  const loginUser = async e => {
    let data = {email, password};
    try {
      await axios.post('http://10.0.2.2:8000/login', data).then(res => {
        setEmail('');
        setPassword('');
        homeHandler();
        ToastAndroid.show('Logged In', ToastAndroid.SHORT);
      });
    } catch (err) {
      console.log(err);

      alert('please enter valid email and password');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      {/* <ImageBackground source={{uri : "https://wallpapercave.com/dwp1x/wp4390828.jpg"}}  > */}
      <View style={styles.subMain}>
      <Text style={styles.header}> Login </Text>
      <TextInput
        style={styles.textInput}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />

      <TextInput
        style={styles.textInput}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />

      <Button onPress={() => loginUser()} title="Login" />

      <Text style={styles.text}>don't have an account ?</Text>
      <Button onPress={() => registerHandler()} title="Register" />
      {/* </ImageBackground> */}
   
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    margin: 10,
    fontSize: 17,
    fontStyle: 'italic',
    margin: 10,
    color: 'black',
  },
  textInput: {
    fontSize: 15,
    textAlign: 'center',
    borderBottomWidth : 0.3
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 10,
  },
  subMain: {
    alignItems: 'center',
    margin: 40,

  },
  main: {
    alignItems: 'center',
    // margin: 40,
    backgroundColor: 'lightblue',
    flex:1
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
});

export default Login;
