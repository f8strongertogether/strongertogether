// @flow

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Platform,
  PermissionsAndroid,
  ToastAndroid,
  Text,
  TouchableOpacity
} from "react-native";
import MapView, { PROVIDER_DEFAULT, Marker, Callout } from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LocationIcon from "react-native-vector-icons/MaterialIcons";
import SmsRetriever from "react-native-sms-retriever";
import smsHelper from "../SmsHelper";

const resources = <Icon name="home" size={24} color="red" />;
const hospital = <Icon name="hospital-building" size={24} color="#800080" />;
const location = <LocationIcon name="my-location" size={30} color="blue" />;
const volunteer = <Icon name="human-greeting" size={24} color="green" />;

class MapScreen extends Component {
  constructor() {
    super();

    this.state = {
      region: {},
      shelters: [],
      emergencyServices: [],
      volunteers: []
    };
  }

  componentDidMount() {
    if ( Platform.OS === "android" ) {
      this.requestAndroidPermissions();
      this.registerSmsListener();
    } else {
      this.getUserLocation();
    }
    this.fetchNewYorkHurricaneData();
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
      }, () => this.fetchUSAEmergencyServices() );
    } );
  }

  onRegionChange( newRegion ) {
    this.setState( { region: newRegion } );
  }

  // SMS Handlers
  _onReceiveSms = ( event ) => {
    const coordinate = smsHelper.parse( event.message );
    ToastAndroid.show( "New safe location found!", ToastAndroid.SHORT );

    const { emergencyServices } = this.state;

    emergencyServices.push( {
      latlng: {
        latitude: coordinate.latitude,
        longitude: coordinate.longitude
      },
      title: "Shelter-Found",
      description: "Hurricane shelter"
    } );

    this.setState( {
      emergencyServices,
      region: {
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    } );
  };

  registerSmsListener = async () => {
    try {
      const registered = await SmsRetriever.startSmsRetriever();
      if ( registered ) {
        SmsRetriever.addSmsListener( this._onReceiveSms );
      }
    } catch ( error ) {}
  };

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

  createNewMarker() {
    const { volunteers, region } = this.state;

    volunteers.push( {
      latlng: {
        latitude: region.latitude,
        longitude: region.longitude
      },
      title: `Volunteer-${volunteers.length}`,
      description: "Emergency volunteer"
    } );

    this.setState( { volunteers } );
  }

  fetchNewYorkHurricaneData() {
    fetch( "https://data.cityofnewyork.us/resource/addd-ji6a.json" )
      .then( response => response.json() )
      .then( ( responseJson ) => {
        const shelters = [];
        let count = 0;

        responseJson.forEach( ( shelter ) => {
          const { the_geom } = shelter;
          const { coordinates } = the_geom;
          shelters.push( {
            latlng: {
              latitude: coordinates[1],
              longitude: coordinates[0]
            },
            title: `Shelter-${count}`,
            description: "Hurricane shelter"
          } );
          count += 1;
        } );

        this.setState( {
          shelters
        } );
      } ).catch( error => console.log( error ) ); // to catch the errors if any
  }

  fetchUSAEmergencyServices() {
    const { region } = this.state;
    const { latitude, longitude } = region;
    const upperLat = latitude + 1;
    const lowerLat = latitude - 1;
    const upperLong = longitude + 1;
    const lowerLong = longitude - 1;

    fetch( "https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/EMS_Stations/FeatureServer/0/query?where=1%3D1&outFields=LONGITUDE,LATITUDE&outSR=4326&f=json" )
      .then( response => response.json() )
      .then( ( { features } ) => {
        const emergencyServices = [];

        let count = 0;

        const filtered = features.filter( point => (
          ( point.attributes.LATITUDE <= upperLat && point.attributes.LATITUDE >= lowerLat )
          && ( point.attributes.LONGITUDE <= upperLong && point.attributes.LONGITUDE >= lowerLong )
        ) );

        filtered.forEach( ( service ) => {
          const { attributes } = service;

          emergencyServices.push( {
            latlng: {
              latitude: attributes.LATITUDE,
              longitude: attributes.LONGITUDE
            },
            title: `Emergency-${count}`,
            description: "Emergency services"
          } );
          count += 1;
        } );

        this.setState( {
          emergencyServices
        } );
      } ).catch( error => console.log( error ) ); // to catch the errors if any
  }

  render() {
    const {
      shelters,
      emergencyServices,
      volunteers,
      region
    } = this.state;

    return (
      <View style={{ flex: 1 }}>
        {region.latitude ? (
          <MapView
            provider={PROVIDER_DEFAULT}
            style={styles.map}
            region={region}
            nRegionChangeComplete={region => this.onRegionChange( region )}
          >
            {shelters.map( marker => (
              <Marker
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
                key={marker.title.toString()}
                pinColor="blue"
              >
                <Callout>
                  <Text>{resources}</Text>
                </Callout>
              </Marker>
            ) )}
            {emergencyServices.map( marker => (
              <Marker
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
                key={marker.title.toString()}
                pinColor="#800080"
              >
                <Callout>
                  <Text>{hospital}</Text>
                </Callout>
              </Marker>
            ) )}
            {volunteers.map( marker => (
              <Marker
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
                key={marker.title.toString()}
                pinColor="green"
              >
                <Callout>
                  <Text>{volunteer}</Text>
                </Callout>
              </Marker>
            ) )}
          </MapView>
        ) : null}
        <View pointerEvents="none" style={styles.markerFixed}>
          {location}
        </View>
        <TouchableOpacity
          onPress={() => this.createNewMarker()}
          style={{
            position: "absolute",
            zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "#841584",
            height: 30
          }}
        >
          <Text style={{
            textAlign: "center",
            paddingTop: 5,
            color: "white",
            fontWeight: "600"
          }}
          >
          TAP TO VOLUNTEER
          </Text>
        </TouchableOpacity>
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
