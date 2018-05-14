import React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { Constants } from 'expo';
import { Button } from 'react-native-elements';
import { primaryButtonBackgroundColor } from './data/colors';

//noinspection JSUnusedGlobalSymbols
export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          multiline
          style={styles.textInput}
          placeholder="Write here what you would like to be reminded about when you get home."
        />
        <Button
          large
          backgroundColor={primaryButtonBackgroundColor}
          textStyle={styles.primaryButtonText}
          title="Remind Me At Home!"
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  textInput: {
    width: '100%',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    textAlignVertical: 'top',
    fontSize: 30,
    borderBottomColor: 'transparent',
  },
  primaryButtonButton: {
    width: '95%',
  },
  primaryButtonText: {
    textAlign: 'center',
  },
});
