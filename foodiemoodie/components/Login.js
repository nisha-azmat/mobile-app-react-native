import React, { useState } from 'react';
import { View,Text, TextInput, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase'; 

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth(app)
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      .then(()=>{
       
        navigation.navigate("HomeScreen")
        setEmail("");
        setPassword("");
      })
      // Handle successful login, e.g., navigate to another screen
    } catch (error) {
      console.log('Login error:', error.message);
      // Handle login error, e.g., display error message
      
    }
  };


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.btn}>
      <Text style={styles.btnText}>Login</Text>
  </TouchableOpacity>
     
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor:"#bc8f8f"
  },
  input: {
    marginTop: 5,
    width: 350,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 3,
    borderRadius: 10,
    backgroundColor: "white",
  },
  btn: {
    marginTop: 20,
    backgroundColor: "#b8860b",
    width: 350,
    alignSelf: "center",
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10
},
btnText: {
    fontSize: 15,
    color: "#2f4f4f",
    alignSelf: "center",
    fontWeight:"bold"
},
});

export default Login;