// @flow

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Platform,
  PermissionsAndroid
} from "react-native";
import MapView, { PROVIDER_DEFAULT, Marker } from "react-native-maps";

class MapScreen extends Component {
  constructor() {
    super();

    this.state = {
      region: {},
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

  componentWillMount() {
    if ( Platform.OS === "android" ) {
      this.requestAndroidPermissions();
    } else {
      this.getUserLocation();
    }
  }

  getUserLocation() {
    navigator.geolocation.getCurrentPosition( ( { coords } ) => {
      const { latitude, longitude } = coords;

      this.setState( {
        region: {
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
      } );
    } );
  }

  requestAndroidPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if ( granted === PermissionsAndroid.RESULTS.GRANTED ) {
        this.getUserLocation();
      } else {
        this.setState( { error: "location" } );
      }
    } catch ( err ) {
      this.setState( { error: "location" } );
    }
  }

  render() {
    const { markers, region } = this.state;

    return (
      <View style={{ flex: 1 }}>
        {region.latitude ? (
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
                key={marker.title.toString()}
              />
            ) )}
          </MapView>
        ) : null}
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
