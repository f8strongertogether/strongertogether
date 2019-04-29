import React, {Component} from "react";
import {StyleSheet, View, Text, TouchableOpacity, Button, FlatList} from "react-native";

type Props = {};
export default class Post extends Component<Props> {
  onPress(){

  }
  render() {
    const list = [
      {key: 'A'},  {key: 'B'},  {key: 'c'}, {key: 'D'}
    ];
    return (
      <View >
          <View style={styles.container}>
            <Button
              onPress={this.onPress}
              title="Water"
              color="#841584"
            />
            <Button
              onPress={this.onPress}
              title="Clothings"
              color="#DDDDDD"
            />
            <Button
              onPress={this.onPress}
              title="Evacuation"
              color="blue"
            />
            <Button
              onPress={this.onPress}
              title="Medicine"
              color="green"
            />
          </View>

        
       
            <FlatList
            data={[{key: 'a'}, {key: 'b'}]}
            renderItem={({item}) => <Text>{item.key}</Text>}
          /> 
     

        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row', 
      justifyContent: 'center', 
      justifyContent: 'space-between',
      padding: 40
    }
      


});