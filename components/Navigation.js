import { createStackNavigator, createAppContainer } from "react-navigation";
import MapScreen from "./Map";
// import Post from "./Post";
// import Survey from "./Survey";
// import Volunteer from "./Volunteer";

const RootStack = createStackNavigator( {
  Map: {
    screen: MapScreen
  }
  // Post: {
  //   screen: Post
  // },
  // Survey: {
  //   screen: Survey
  // },
  // Volunteer: {
  //   screen: Volunteer
  // }
} );

const App = createAppContainer( RootStack );

export default App;
