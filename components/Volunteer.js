// @flow

import React from "react";
import {
  StyleSheet, Button
} from "react-native";

const VolunteerButton = ( { createVolunteer } ) => (
  <Button
    onPress={() => createVolunteer()}
    title="Volunteer"
    color="#841584"
  />
);

export default VolunteerButton;

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
