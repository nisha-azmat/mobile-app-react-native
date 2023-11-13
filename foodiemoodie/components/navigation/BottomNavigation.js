import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';
import LocationScreen from '../LocationScreen';
import Account from '../Account';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const size =30
function BottomNavigation() {
  return (
    <Tab.Navigator
    initialRouteName='Home'
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let iconColor;
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
            iconColor = focused ? "black" : '#fff';
          }if (route.name === 'Location') {
            iconName = focused
              ? 'location'
              : 'location-outline';
            iconColor = focused ? "black" : '#fff';
          }
          if (route.name === 'Account') {
            iconName = focused
              ? 'person-circle'
              : 'person-circle-outline';
            iconColor = focused ? "black" : '#fff';
          }
            return <Ionicons name={iconName} size={size} color={iconColor} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          height: 60,
          backgroundColor: "#b8860b",
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Tab.Screen name="Location" component={LocationScreen} />
      <Tab.Screen name="Account" component={Account} />

    </Tab.Navigator>
  );
}
export default BottomNavigation