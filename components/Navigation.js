import React from "react";
import {
  // createStackNavigator,
  createAppContainer
} from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FormIcon from "react-native-vector-icons/AntDesign";

import MapScreen from "./Map";
// import Post from "./Post";
// import Survey from "./Survey";
// import Volunteer from "./Volunteer";

// const RootStack = createStackNavigator( {
//   Map: {
//     screen: MapScreen
//   }
//   // Post: {
//   //   screen: Post
//   // },
//   // Survey: {
//   //   screen: Survey
//   // },
//   // Volunteer: {
//   //   screen: Volunteer
//   // }
// } );

const tabNav = createMaterialBottomTabNavigator( {
  Resources: {
    screen: MapScreen,
    navigationOptions: () => ( {
      tabBarIcon: ( { tintColor } ) => (
        <Icon
          name="food"
          size={24}
          color={tintColor}
        />
      )
    } )
  },
  "Request Help": {
    screen: MapScreen,
    navigationOptions: () => ( {
      tabBarIcon: ( { tintColor } ) => (
        <FormIcon
          name="form"
          size={24}
          color={tintColor}
        />
      )
    } )
  },
  "See Posts": {
    screen: MapScreen,
    navigationOptions: () => ( {
      tabBarIcon: ( { tintColor } ) => (
        <Icon
          name="message-text"
          size={24}
          color={tintColor}
        />
      )
    } )
  }
}, {
  tabBarOptions: {
    showLabel: false, // hide labels
    activeTintColor: "#F8F8F8", // active icon color
    inactiveTintColor: "#586589", // inactive icon color
    tabBarColor: "#2f6690" // TabBar background
  }
} );

const App = createAppContainer( tabNav );

export default App;
