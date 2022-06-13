import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const Register = ({navigation}) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleRegister = () => {
    // console.log(name, email, password)
    navigation.navigate('Login');
  };

  const registerUser = async e => {
    if(password == confirmPassword){
    let data = {name, email, password};

    try {
      await axios.post('http://10.0.2.2:8000/register', data).then(res => {
        ToastAndroid.show('Registered successfully', ToastAndroid.SHORT);
        handleRegister();
      });
    } catch (err) {
      console.log(err);
    }
  }
  else {
    alert("Password does not match")
  }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.subMain}>
      <Text style={styles.header}> Registration </Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder="Full Name"
      />
      <TextInput
        style={styles.textInput}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />

      <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
      />

<TextInput
        secureTextEntry={true}
        style={styles.textInput}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm Password"
      />

      {/* <Button onPress={()=>{console.log(email),console.log(password)}} title="Login" /> */}

      <View style={styles.button}>
        <Button onPress={() => registerUser()} title="Register" />
      </View>
      {/* <View style={{margin:10}}>
      <Button style={{margin:10}} onPress={()=>navigation.goBack()} title="Back" />
      </View> */}
      <Icon.Button name="chevron-back" onPress={() => navigation.goBack()}>
        <Text style={styles.iconText}>Back</Text>
      </Icon.Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    margin: 10,
    fontSize: 20,
  },
  textInput: {
    fontSize: 15,
    textAlign: 'center',
  },
  button: {
    margin: 10,
  },
  iconButton: {
    // backgroundColor:'primary'
  },
  iconText: {
    color: 'white',
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
    // margin : 40,
    backgroundColor : 'lightblue',
    flex : 1
  },
});

export default Register;
