import React from "react";
import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FormIcon from "react-native-vector-icons/AntDesign";

import MapScreen from "./Map";
import LocationScreen from "./Location";
import Survey from "./Survey";
import Urgency from "./Urgency";
import PostScreen from "./Post";

const noHeader = {
  header: null
};

const SurveyStack = createStackNavigator( {
  Survey: {
    screen: Survey,
    navigationOptions: () => noHeader
  },
  Urgency: {
    screen: Urgency,
    navigationOptions: () => noHeader
  },
  Location: {
    screen: LocationScreen,
    navigationOptions: () => noHeader
  }
} );

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
  Survey: {
    screen: SurveyStack,
    navigationOptions: () => ( {
      title: "Request Help",
      tabBarIcon: ( { tintColor } ) => (
        <FormIcon
          name="form"
          size={24}
          color={tintColor}
        />
      )
    } )
  },
  Post: {
    screen: PostScreen,
    navigationOptions: () => ( {
      title: "See Posts",
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
