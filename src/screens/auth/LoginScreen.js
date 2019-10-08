import React from 'react';
import {
  Button,
  StyleSheet,
  View,
} from 'react-native';
import { Form, Item, Input, Content, Container, Label } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'

export default class LoginScreen extends React.Component {
  
  state = {
    email: '',
    password: ''
  }
  
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={text => this.setState({ email: text })}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={text => this.setState({ password: text })}/>
            </Item>
            
            <Button title="Sign in!" onPress={this._signInAsync} />
            
          </Form>
        </Content>
      </Container>
    );
  }

  _signInAsync = async () => {
    await axios.post('https://codeforsuzanoapi.herokuapp.com/login', {"email": this.state.email, "password": this.state.password})
      .then(res => {
        AsyncStorage.setItem('userToken', res.data.token);
        AsyncStorage.setItem('name', res.data.user[0].name);
        AsyncStorage.setItem('email', res.data.user[0].email);
        this.props.navigation.navigate('HomeScreen');
      })
      .catch(function (error) {
        // handle error
        alert(error);
      })
  };
  // _signInAsync = async () => {
  //   await AsyncStorage.setItem('userToken', 'abc');
  //   await AsyncStorage.setItem('username', this.state.username);
    
  //   this.props.navigation.navigate('HomeScreen');
  // };
}

// class AuthLoadingScreen extends React.Component {
//   constructor() {
//     super();
//     this._bootstrapAsync();
//   }

//   // Fetch the token from storage then navigate to our appropriate place
//   _bootstrapAsync = async () => {
//     const userToken = await AsyncStorage.getItem('userToken');

//     // This will switch to the App screen or Auth screen and this loading
//     // screen will be unmounted and thrown away.
//     this.props.navigation.navigate(userToken ? 'App' : 'Auth');
//   };

//   // Render any loading content that you like here
//   render() {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator />
//         <StatusBar barStyle="default" />
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});