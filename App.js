/* eslint-disable react/prop-types */
import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from 'navigation/AppNavigator';
import styled from 'styled-components';

import * as images from '@assets';
import * as fonts from '@fonts';

const Container = styled.View`
  flex: 1;
  backgroundcolor: '#fff';
`;

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  _loadResourcesAsync = async () =>
    Promise.all([
      Asset.loadAsync([...images]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        ...fonts,
      }),
    ]);

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    const { isLoadingComplete } = this.state;
    const { skipLoadingScreen } = this.props;

    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      <Container>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </Container>
    );
  }
}
