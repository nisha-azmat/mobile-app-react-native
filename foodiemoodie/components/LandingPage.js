import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import backImage from "../assets/landingpage.jpg"
import { TouchableOpacity } from 'react-native'

const LandingPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={backImage} resizeMode="cover" style={styles.image}>
                <View style={styles.overlay} />
                <View style={{ flex: 0.5 }}>
                   <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")}>
                   <Text style={styles.skip}>Skip</Text>
                   </TouchableOpacity>
                </View>
                <View style={{ flex: 0.5 }}>
                    <View style={{ flex: 0.5, marginLeft: 10 }}>
                        <Text style={styles.enjoy}>Moments you never want to forget</Text>
                        <Text style={styles.enjoy2}>Way to peace of MIND</Text>

                    </View>
                    <View style={{ flex: 0.5 }}>
                        <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={styles.btn1}>
                            <Text style={styles.btnText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate("SignUp")} style={styles.btn2}>
                            <Text style={styles.btnText}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default LandingPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    skip: {
        marginTop: 29,
        fontSize: 20,
        alignSelf: "flex-end",
        marginRight: 10

    },
    enjoy: {
        color: "grey",
        fontSize: 25,
        fontWeight: "bold",

    },
    enjoy2: {
        color: "grey",
        fontSize: 20,
        marginTop: 10,


    },
    btn1: {
        backgroundColor: "#b8860b",
        width: 250,
        alignSelf: "center",
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10
    },
    btnText: {
        fontSize: 20,
        color: "white",
        alignSelf: "center"
    },
    btn2: {
        backgroundColor: "transparent",
        width: 250,
        alignSelf: "center",
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        borderWidth: 2,
        marginTop: 20,
        borderColor: "white"

    },
    overlay: {
        flex: 1,
        position: 'absolute',
        opacity: 0.5,
        backgroundColor: 'black',
        width: "100%",
        height: "100%"
    }
})