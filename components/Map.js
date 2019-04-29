// @flow

import React, { Component } from "react";
import {
  View,
  StyleSheet
} from "react-native";
import MapView, { PROVIDER_DEFAULT, Marker } from "react-native-maps";

const region = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

class MapScreen extends Component {
  constructor() {
    super();

    this.state = {
      markers: [{
        latlng: {
          latitude: 37.78825,
          longitude: -122.4324
        },
        title: "Fake map point",
        description: "speaks for itself"
      }]
    };
  }

  render() {
    const { markers } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <MapView
          provider={PROVIDER_DEFAULT}
          style={styles.map}
          region={region}
          onRegionChangeComplete={region => console.log( region )}
        >
          {markers.map( marker => (
            <Marker
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

export default MapScreen;

const styles = StyleSheet.create( {
  container: {
    flex: 1
  },
  backButton: {
    top: 28,
    left: 23
  },
  image: {
    padding: 5
  },
  mapContainer: {
    flexGrow: 1
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  markerFixed: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  markerPin: {
    width: 23,
    height: 33,
    position: "absolute"
  }
} );
