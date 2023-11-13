import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import { TextInput, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import img1 from '../assets/pakistan.jpg'
import img2 from '../assets/southkorea.jpg'
import img3 from '../assets/indonesia.jpg'
import img4 from '../assets/greece.jpg'
import img5 from '../assets/italy.jpg'
import img6 from '../assets/turkey.jpg'
const DATA1 = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Pakistan',
        img: img1
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'South Korea',
        img: img2
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Indonesia',
        img: img3
    },
];
const DATA2 = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Greece',
        img: img4
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Italy',
        img: img5
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Turkey',
        img: img6
    },
];
const DATA3 = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Greece',
        img: img4
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Italy',
        img: img5
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Turkey',
        img: img6
    },
];
const Home = () => {
    return (
        <ScrollView>
        <View  style={styles.container}>
        <View style={{ flex: 1,marginTop:50 }}>
        <View style={{ flex: 0.2 }}>
            <Text style={styles.hello1}>Explore your Favourite Place</Text>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <TouchableOpacity style={styles.btn1}>
                    <Text style={styles.btn1Text}>Hotels</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2}>
                    <Text style={styles.btn2Text}>Restraunts</Text>
                </TouchableOpacity>
            </View>
            <TextInput placeholder='Search' style={styles.pass} />
        </View>
        <View style={{ flex: 0.2 }}>
          
                <View >
                    <Text style={styles.category} >Places Category</Text>
                    <Text style={styles.type1} >Asian Countries</Text>

                </View>

               
           

            <View>
                <FlatList
                    data={DATA1}
                    renderItem={({ item }) =>
                        <View style={styles.flatList}>
                            <Image style={styles.image} source={item.img} />
                            <Text style={styles.names}>{item.title}</Text>
                        </View>
                    }
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
        </View>

        <View style={{ flex: 0.3 }}>
        <View>
        <Text style={styles.type2} >Europe Countries</Text>

        </View>
            <View>
                <FlatList
                    data={DATA2}
                    renderItem={({ item }) =>
                        <View style={styles.flatList}>
                            <Image style={styles.image1} source={item.img} />
                            <Text style={styles.names1}>{item.title}</Text>
                        </View>
                    }
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
        </View>
        <View style={{ flex: 0.3 }}>
        <View>
        <Text style={styles.type2} >Top dining spots in town
        </Text>

        </View>
            <View>
                <FlatList
                    data={DATA3}
                    renderItem={({ item }) =>
                        <View style={styles.flatList}>
                            <Image style={styles.image3} source={item.img} />
                            <Text style={styles.names3}>{item.title}</Text>
                        </View>
                    }
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
        </View>
    </View>
        </View>
           

        </ScrollView>
    )
}

export default Home
const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        backgroundColor: "#bc8f8f",
       marginBottom:60
    },

    hello1: {
        marginTop: 20,
        fontSize: 25,
        marginLeft: 20,
        fontWeight: "bold"
    },
    btn1: {
        marginTop: 15,
        backgroundColor: "#b8860b",
        width: 150,
        alignSelf: "flex-start",
        paddingTop: 10,
        paddingBottom: 15,
        borderRadius: 10,
        marginLeft: 20,
    },
    btn1Text: {
        fontSize: 15,
        color: "white",
        alignSelf: "center"
    },
    btn2: {
        marginTop: 15,

        backgroundColor: "#b8860b",
        width: 150,
        alignSelf: "flex-end",
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
    pass: {
        marginTop: 40,
        width: 350,
        alignSelf: "center",
        paddingVertical: 7,
        paddingHorizontal: 7,
        borderRadius: 10,
        backgroundColor: "white",
    },
    category: {
        marginTop:10,
        fontSize: 13,
        alignSelf: "flex-start",
        marginLeft: 20,
        fontWeight:"bold"
    },
    type1: {
        marginTop:10,
        fontSize: 20,
        alignSelf: "flex-start",
        marginLeft: 20,
        fontWeight:"bold"
    },
    type2: {
        marginTop:10,
        fontSize: 20,
        alignSelf: "flex-start",
        marginLeft: 20,
        fontWeight:"bold"
    },
   
    flatList: {

    },
    image: {
        width: 300,
        height: 150,
        margin: 10
    },
    names: {
        marginTop: 1,
        fontSize: 15,
        alignSelf: "flex-start",
        marginLeft: 20,
        fontWeight: "bold"



    },
    image1: {
        width: 300,
        height: 150,
        margin: 10
    },
    names1: {
        marginTop: 1,
        fontSize: 15,
        alignSelf: "flex-start",
        marginLeft: 20,
        fontWeight: "bold"



    },
    image3: {
        width: 300,
        height: 150,
        margin: 10
    },
    names3: {
        marginTop: 10,
        fontSize: 15,
        alignSelf: "flex-start",
        marginLeft: 20,
        fontWeight: "bold"



    },



})