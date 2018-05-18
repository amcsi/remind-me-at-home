import React from 'react';
import WelcomeScreen from './WelcomeScreen';
import { createStackNavigator } from 'react-navigation';
import MapScreen from './MapScreen';

//noinspection JSUnusedGlobalSymbols
export default class App extends React.Component {
  render() {
    const MainNavigator = createStackNavigator({
      welcome: {
        screen: WelcomeScreen,
        navigationOptions: {
          title: 'Welcome',
        },
      },
      map: {
        screen: MapScreen,
        navigationOptions: {
          title: 'Home selection',
        },
      },
    }, {
      lazy: true,
      swipeEnabled: false,
    });

    return (
      <MainNavigator />
    );
  }
}