import React, {Component} from "react";
import {StyleSheet, View, Text, TouchableOpacity, Button, FlatList} from "react-native";

type Props = {};

export default class Post extends Component<Props> {
  constructor(){
    super()
    this.state = {
      dataSource: []
    }
  }
  renderItem = ({item}) => {
    return(
    <View style={{borderColor: 'black', borderWidth:1}}>
      <View style={{flex:1, justifyContent: 'center'}}>
        <Text>
          Request needs: {item.needs}
        </Text>
        <Text>
          Urgency: {item.urgency}
        </Text>
        <Text>
          Coordinates: {item.coordinates}
        </Text>
      </View>
    </View>
    )
  }
  componentDidMount(){
    const url = 'http://www.json-generator.com/api/json/get/bUrZFnjiqa?indent=2'
    fetch(url)
    .then((response) => response.json())

    .then((responseJson) => {
        this.setState({
          dataSource: responseJson.post_list
        })
    })
    .catch((error) => {
      alert("error")
    })
  }
  onPress(){

  }
  render() {
    return (
      <View>
          <View style={styles.container}>
            {/* <Button style={flex=1}
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
            /> */}
            <TouchableOpacity
              style={styles.btn1}
              onPress={this.onPress}>
              <Text style={styles.btn_text}>Water</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn2}
              onPress={this.onPress}>
              <Text style={styles.btn_text}>Clothings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn3}
              onPress={this.onPress}>
              <Text style={styles.btn_text}>Evacuation</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn4}
              onPress={this.onPress}>
              <Text style={styles.btn_text}>Medicine</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn5}
              onPress={this.onPress}>
              <Text style={styles.btn_text}>Other</Text>
            </TouchableOpacity>
          </View>


            <FlatList 
              data={this.state.dataSource}
              renderItem={this.renderItem}
              keyExtractor={(item => item._id.toString())}
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
      paddingLeft: 40,
      padding: 30
    },
    btn_text:{
      fontSize: 20,
      fontFamily: 'Open Sans',
      color: '#291142'
    },
    btn1:{
      alignItems: 'center',
      backgroundColor: '#B36499',
      padding: 15
    },
    btn2:{
      alignItems: 'center',
      backgroundColor: '#FFE6A4',
      padding: 15
    },
    btn3:{
      alignItems: 'center',
      backgroundColor: '#FFA8E3',
      padding: 15
    },
    btn4:{
      alignItems: 'center',
      backgroundColor: '#72C9CC',
      padding: 15
    },
    btn5:{
      alignItems: 'center',
      backgroundColor: '#6DB0B3',
      padding: 15
    }


      


});