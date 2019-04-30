import React, {Component} from "react";
import {StyleSheet, View, Text, TouchableOpacity, Button, FlatList} from "react-native";

type Props = {};
var post_items = [
  {
    "_id": "5cc7a268b40c917a2e186f84",
    "needs": [
      "other",
      "water"
    ],
    "urgency": "high",
    "coordinates": [
      39.088979,
      -73.213427
    ]
  },
  {
    "_id": "5cc7a268c9ff636b1614c315",
    "needs": [
      "food",
      "evacuation"
    ],
    "urgency": "medium",
    "coordinates": [
      39.26255,
      -73.239273
    ]
  },
  {
    "_id": "5cc7a268ecb7f55f5c5b66cf",
    "needs": [
      "clothing",
      "medicine"
    ],
    "urgency": "high",
    "coordinates": [
      40.669252,
      -73.791024
    ]
  },
  {
    "_id": "5cc7a26889add1aa908b5f99",
    "needs": [
      "medicine",
      "water"
    ],
    "urgency": "high",
    "coordinates": [
      39.789623,
      -73.04364
    ]
  },
  {
    "_id": "5cc7a268cf1a83088fdab152",
    "needs": [
      "food",
      "clothing"
    ],
    "urgency": "medium",
    "coordinates": [
      40.541229,
      -73.920123
    ]
  },
  {
    "_id": "5cc7a2685b362b2170dd06ad",
    "needs": [
      "water",
      "clothing"
    ],
    "urgency": "low",
    "coordinates": [
      39.591245,
      -73.833515
    ]
  },
  {
    "_id": "5cc7a26899ccfea0faeb5985",
    "needs": [
      "water",
      "other"
    ],
    "urgency": "high",
    "coordinates": [
      40.621593,
      -73.601694
    ]
  }
];

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
        <Text style={{fontSize: 20}}>
          Request needs: {item.needs.toString()}
        </Text>
        <Text style={{fontSize: 20}}>
          Urgency: {item.urgency}
        </Text>
        <Text style={{fontSize: 20}}>
          Coordinates: {item.coordinates.toString()}
        </Text>
      </View>
    </View>
    )
  }
  // componentDidMount(){
  //   const url = 'http://www.json-generator.com/api/json/get/bUrZFnjiqa?indent=2'
  //   fetch(url)
  //   .then((response) => response.json())

  //   .then((responseJson) => {
  //       this.setState({
  //         dataSource: responseJson.post_list
  //       })
  //   })
  //   .catch((error) => {
  //     alert("error")
  //   })
  // }

  onPress(){

  }

  render() {
    return (
      <View>
          <View style={styles.container}>
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
              <Text style={styles.btn_text}>Food</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn6}
              onPress={this.onPress}>
              <Text style={styles.btn_text}>Other</Text>
            </TouchableOpacity>
          </View>

            <FlatList 
              data={post_items}
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
    },
    btn6:{
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 15
    },
});