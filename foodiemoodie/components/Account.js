import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import { TextInput, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'

const Account = ({navigation}) => {
  return (

    <View style={{ flex: 1 }}>
    <TouchableOpacity onPress={()=>navigation.navigate("LandingPage")}style={styles.btn1}>
                            <Text style={styles.btn1Text}>LogIn to another account </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate("SignUp")} style={styles.btn2}>
                            <Text style={styles.btn2Text}>SignUp</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={styles.btn3}>
                        <Text style={styles.btn3Text}>LogOut</Text>
                    </TouchableOpacity>

    
    
    
    </View>
  )
}
export default Account
const styles = StyleSheet.create({
btn1: {
    marginTop: 200,

    backgroundColor: "red",
    width: 200,
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 10,
    marginRight: 20,
},
btn1Text: {
    fontSize: 15,
    color: "white",
    alignSelf: "center"
},
btn2: {
    marginTop: 15,

    backgroundColor: "red",
    width: 200,
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 10,
    marginRight: 20,
},
btn2Text: {
    fontSize: 15,
    color: "white",
    alignSelf: "center"
},
btn3: {
    marginTop: 15,

    backgroundColor: "red",
    width: 200,
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 10,
    marginRight: 20,
},
btn3Text: {
    fontSize: 15,
    color: "white",
    alignSelf: "center"
},
})

