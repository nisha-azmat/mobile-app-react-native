import React from 'react';
import { View, Text } from 'react-native';

const Loc2 = ({ route }) => {
  const { markers } = route.params;

  return (
    <View>
      {markers.map((marker, index) => (
        <View key={index}>
          <Text>Name: {marker.name}</Text>
          <Text>Address: {marker.vicinity}</Text>
        </View>
      ))}
    </View>
  );
};

export default Loc2;
