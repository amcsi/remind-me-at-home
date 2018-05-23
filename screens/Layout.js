import React from 'react';
import WelcomeScreen from './WelcomeScreen';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import MapScreen from './MapScreen';
import NewReminderScreen from './NewReminderScreen';

//noinspection JSUnusedGlobalSymbols
export default class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      introduction: createStackNavigator({
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
      }),
      main: {
        screen: NewReminderScreen,
        navigationOptions: {

        },
      },
    });

    return (
      <MainNavigator />
    );
  }
}
