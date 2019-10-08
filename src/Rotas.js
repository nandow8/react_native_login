import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './screens/auth/LoginScreen';
import LogoutScreen from './screens/auth/LogoutScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/products/ProductScreen';

const Rotas = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },

  LogoutScreen: {
    screen: LogoutScreen,
    navigationOptions: {
      header: null,
    },
  },

  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      
    },
  },

  ProductScreen: {
    screen: ProductScreen,
    navigationOptions: {
      
    },
  }

}, {
  // Default config for all screens
  // headerMode: 'none',
  initialRouteName: 'LoginScreen',
 
});

const App = createAppContainer(Rotas);

export default App;