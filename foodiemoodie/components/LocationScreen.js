import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MapView, { Marker } from 'react-native-maps';

const LocationScreen = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState('');
  const [mapRegion, setMapRegion] = useState(null);
  const [markers, setMarkers] = useState([]);

  const handleSearch = () => {
    // Fetch location data from the Google Maps Geocoding API
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyDDkiLNKLJpDmWkvEbFjrJoNkY9sJtx6IE`
    )
      .then(response => response.json())
      .then(data => {
        if (data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setMapRegion({
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });

          // Fetch nearby places using the Google Maps Places API (e.g., hotels and restaurants)
          fetch(
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=restaurant|lodging&key=AIzaSyDDkiLNKLJpDmWkvEbFjrJoNkY9sJtx6IE`
          )
            .then(response => response.json())
            .then(data => {
              setMarkers(data.results);
              navigateToNextScreen(data.results); // Pass the fetched data to the next screen
            })
            .catch(error => console.error(error));
        }
      })
      .catch(error => console.error(error));
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const navigateToNextScreen = data => {
    navigation.navigate('NextScreen', { markers: data }); // Navigate to the next screen and pass the data as a parameter
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a location"
        value={location}
        onChangeText={text => setLocation(text)}
        onKeyPress={handleKeyPress}
      />
      <Button title="Search" onPress={handleSearch} />

      {mapRegion && (
        <MapView style={styles.map} region={mapRegion}>
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.geometry.location.lat,
                longitude: marker.geometry.location.lng,
              }}
              title={marker.name}
              description={marker.vicinity}
            />
          ))}
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  map: {
    flex: 1,
    width: '100%',
  },
});

export default LocationScreen;
