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
      <View style={{flex:1}}>
          <View style={styles.container}>
            <Button style={flex=1}
              onPress={this.onPress}
              title="Water"
              color="#841584"
            />
            <Button style={flex=1}
              onPress={this.onPress}
              title="Clothings"
              color="#DDDDDD"
            />
            <Button style={flex=1}
              onPress={this.onPress}
              title="Evacuation"
              color="blue"
            />
            <Button style={flex=1}
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
      display: 'flex',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      flexDirection: 'row', 
      justifyContent: 'center',
      paddingRight: 40,
      paddingLeft: 40
    }
      


});