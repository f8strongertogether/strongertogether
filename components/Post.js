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
      <View style={styles.container}>

        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 40,
          }}>
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
          {/* <FlatList
            data={[{key: 'a'}, {key: 'b'}]}
            renderItem={({item}) => <Text>{item.key}</Text>}
          /> */}

        

        

  </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
        flex: 1,
        justifyContent: 'space-between',
      },

      button:{
        alignItems: 'center',
        flex:1,
        backgroundColor: 'blue',
        padding: 25
      },
      btn_text:{
        fontSize: 20,
        color: 'black'
      },
      b2:{
        alignItems: 'center',
        flex:1,
        backgroundColor: 'black',
        padding: 25
      },
      b3:{
        alignItems: 'center',
        flex:1,
        backgroundColor: 'green',
        padding: 25
      },
      b4:{
        alignItems: 'center',
        flex:1,
        backgroundColor: 'red',
        padding: 25
      }


});