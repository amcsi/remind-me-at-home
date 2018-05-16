import React from 'react';
import { SafeAreaView } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';

//noinspection JSUnusedGlobalSymbols
export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WelcomeScreen />
      </SafeAreaView>
    );
  }
}
