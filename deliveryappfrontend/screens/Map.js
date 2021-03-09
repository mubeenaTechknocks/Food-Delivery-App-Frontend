import React, { useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { View, Text, Image, StyleSheet } from 'react-native';
// import Geocoder from 'react-native-geocoding';

const mapStandardStyle = [
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
];
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = 0.01;


const Map = ({ navigation }) => {

  const [regions, setRegion] = useState({
    latitude: 10.012427,
    longitude: 77.150219,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    Address: null
  })

  navigator.geolocation.getCurrentPosition(async (loc) => {
    const region = {
      latitude: loc.coords.latitude,
      longitude: loc.coords.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };
    setRegion(region);
    // console.log('current location...');
    // console.log(loc)
    // console.log('Storing location...');
  //   Geocoder.from(loc.coords.latitude, loc.coords.longitude)
  //     .then(json => {
  //       console.log(json);
  //       var addressComponent = json.results[0].address_components;
  //       this.setState({
  //         Address: addressComponent
  //       })
  //       console.log(addressComponent);
  //     })
  //     .catch(error => console.warn(error));
   },
    (err) => {
      console.log(err);
      throw (err);
    },
    { enableHighAccuracy: true });

  // }

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      customMapStyle={mapStandardStyle}
      region={regions}
      onRegionChangeComplete={region => setRegion(region)}

    >
      <Marker
        coordinate={{
          latitude: regions.latitude,
          longitude: regions.longitude,
        }}
        image={require('../assets/map_marker.png')}

        // onPress={() => navigation.navigate('MainScreen')}
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>Hello</Text>
              <Image
                style={styles.image}
                source={require('../assets/icon.png')}
              />
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: '100%'
  },
  // Callout bubble
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
    // marginBottom: -15
  },
  // Character name
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  // Character image
  image: {
    width: "100%",
    height: 80,
  },
});