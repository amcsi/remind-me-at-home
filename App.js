import React from 'react';
import { View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import { createStackNavigator } from 'react-navigation';
import MapScreen from './screens/MapScreen';

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
      <View style={{ flex: 1 }}>
        <MainNavigator />
      </View>
    );
  }
}
