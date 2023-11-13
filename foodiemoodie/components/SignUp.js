import React,{useState} from 'react'

import { Text, View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native'

import { TouchableOpacity } from 'react-native'
import { getAuth, createUserWithEmailAndPassword,  } from 'firebase/auth';
import { app } from './firebase'; 



const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth(app)
  
  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      .then(()=>{
        alert("User Created")
        navigation.navigate("Login")
      })
      // Handle successful sign up, e.g., navigate to another screen
    } catch (error) {
      console.log('Sign up error:', error.message);
      // Handle sign up error, e.g., display error message
    }
  };
    
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
            
                <Text style={styles.SignUp}>Sign Up</Text>
                <Text style={styles.SignUp1}>Email</Text>
                <TextInput placeholder='    Email'  value={email}
                onChangeText={setEmail} style={styles.email} />
               
                <Text style={styles.SignUp3}>Password</Text>
                <TextInput placeholder='    Password' secureTextEntry
                value={password}
                onChangeText={setPassword} style={styles.Password} />
                <TouchableOpacity onPress={handleSignUp} style={styles.account}>
                <Text style={styles.btnText}>Create Account</Text>
            </TouchableOpacity>
            




            </View>
            
                    
                   
                   







                </View>
               
           

    )
}

export default SignUp
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#bc8f8f"
    },
    SignUp: {
        marginTop: 20,
        marginLeft: 40,
        fontSize: 20,
        fontWeight: "bold",
        color:"#2f4f4f"
    },
    SignUp1: {
        marginTop: 100,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: "bold",
        color:"#2f4f4f"
    },
    email: {
        marginTop: 5,
        width: 350,
        alignSelf: "center",
        paddingVertical: 15,
        paddingHorizontal: 3,
        borderRadius: 10,
        backgroundColor: "white",

    },
    SignUp2: {
        marginTop: 30,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: "bold",
        color:"#2f4f4f"
    },
   
    SignUp3: {
        marginTop: 10,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: "bold",
        color:"#2f4f4f"
    },
    Password: {
        marginTop: 5,
        width: 350,
        alignSelf: "center",
        paddingVertical: 15,
        paddingHorizontal: 3,
        borderRadius: 10,
        backgroundColor: "white",

    },
   
   
    account: {
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
   
})