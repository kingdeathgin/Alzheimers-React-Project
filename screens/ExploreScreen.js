import * as React from 'react';
import MapView, { Callout, Circle, Marker, pinColor } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function ExploreScreen() {
  const [pin, setPin] = React.useState ({ latitude: 37.78825,
    longitude: -122.4324,})
  return (
    <View style={{marginTop: 50, flex: 1}}>
      <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyBmO4OrlC0AqAm16WLUfIeIUwgdC4MMVus',
        language: 'en',
      }}
      styles={{
        container: {flex:0, position: "absolute", width: "100%", zIndex:1},
        listView: {backgroundColor: "white"}
      }}
    />
      <MapView style={styles.map} initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    provider="google"
    >
      <Marker coordinate={pin} 
      pinColor="black"
      draggable={true}
      onDragStart={(e) =>{
        console.log("Drag Start", e.nativeEvent.coordinates)
      }}
      onDragEnd={(e) =>{
        setPin({
          latitude: e.nativeEvent.coordinate.latitude,
          longitude: e.nativeEvent.coordinate.longitude
        })
      }}
      >
        <Callout>
          <Text>I'm here</Text>
        </Callout>
      </Marker>
      <Circle center={ 
        pin} 
      radius={1000} />
    </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});