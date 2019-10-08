import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList, Button } from 'react-native';
import axios from 'axios'

export default class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buracos: []
      // buracos: [
      //   {"created_at": 'fernando'},
      //   {"created_at": 'caio'},
      // ]
    };
  }

  _buracos = async () => {
    await axios.get('https://codeforsuzanoapi.herokuapp.com/buraco')
      .then(res => {
        this.setState({
          buracos: res.data
        })
        
        console.log(this.state.buracos)
        // this.props.navigation.navigate('HomeScreen');
      })
      .catch(function (error) {
        // handle error
        alert(error);
      })
  };

  render() {
    return (
      <View style={styles.container}>
      <Button title='lista' onPress={this._buracos}/>
        <FlatList
          data={this.state.buracos}
          renderItem={({item}) => <Text style={styles.item}>{item.created_at}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})