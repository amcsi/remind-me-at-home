import React from 'react';
import Swiper from 'react-native-swiper';
import styled from 'styled-components';
import { Button } from 'react-native-elements';

const SwipeView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const CenteredText = styled.Text`
  text-align: center;
`;

class WelcomeScreen extends React.Component {
  //noinspection JSUnusedGlobalSymbols
  static navigationOptions = {
    header: null,
  };

  render() {
    // TODO ask for permissions before navigating to map.
    return (
      <Swiper loop={false}>
        <SwipeView>
          <CenteredText>
            Welcome to

            Remind Me At Home!
          </CenteredText>
        </SwipeView>
        <SwipeView>
          <CenteredText>
            When you're away from home and there is something you would like to be reminded about when you get home...
          </CenteredText>
        </SwipeView>
        <SwipeView>
          <CenteredText>
            This app gives you a simple and straightforward way of reminding you about it.
            Just open the app, type something, press the button, and you're set!
          </CenteredText>
        </SwipeView>
        <SwipeView>
          <CenteredText>
            Before you start using the app, there's just one thing you will need to do first: let me know where you're "home" is.
          </CenteredText>
          <CenteredText />
          <CenteredText>
            Don't worry, this data won't be shared with anyone. It will be used only within this app, and will not be shared with anyone else.
          </CenteredText>
        </SwipeView>
        <SwipeView>
          <CenteredText>
            Are you ready?
          </CenteredText>
          <CenteredText>
          </CenteredText>

          <Button title="Pick My Home Location" onPress={() => this.props.navigation.navigate('map')} />
        </SwipeView>
      </Swiper>
    );
  }
}

export default (WelcomeScreen);
