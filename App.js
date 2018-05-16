import React from 'react';
import { SafeAreaView } from 'react-native';
import NewReminderScreen from './screens/NewReminderScreen';

//noinspection JSUnusedGlobalSymbols
export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <NewReminderScreen />
      </SafeAreaView>
    );
  }
}
