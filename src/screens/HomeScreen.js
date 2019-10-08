import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
    };

    getData = async () => {
        try {
          const value = await AsyncStorage.getItem('userToken')
          console.log(value)
        } catch(e) {
          // error reading value
        }
      }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Show me more of the app" onPress={this.getData} />
                <Button title="Show me more of the app" onPress={this._showMoreApp} />
                <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
            </View>
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('ProductScreen');
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('LoginScreen');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});