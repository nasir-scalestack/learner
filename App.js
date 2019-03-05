/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './src/navigation/AppNavigator';
import styled from 'styled-components';

import * as images from '@assets';
import * as fonts from '@fonts';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  _loadResourcesAsync = async () =>
    Promise.all([
      Asset.loadAsync([require('./src/assets/welcome-artwork.png')]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'sf-bold': require('./src/fonts/SF-UI-Text-Bold.otf'),
        'sf-bold-italic': require('./src/fonts/SF-UI-Text-BoldItalic.otf'),
        'sf-heavy': require('./src/fonts/SF-UI-Text-Heavy.otf'),
        'sf-heavy-italic': require('./src/fonts/SF-UI-Text-HeavyItalic.otf'),
        'sf-italic': require('./src/fonts/SF-UI-Text-Italic.otf'),
        'sf-light': require('./src/fonts/SF-UI-Text-Light.otf'),
        'sf-light-italic': require('./src/fonts/SF-UI-Text-LightItalic.otf'),
        'sf-medium': require('./src/fonts/SF-UI-Text-Medium.otf'),
        'sf-medium-italic': require('./src/fonts/SF-UI-Text-MediumItalic.otf'),
        'sf-regular': require('./src/fonts/SF-UI-Text-Regular.otf'),
        'sf-semibold': require('./src/fonts/SF-UI-Text-Semibold.otf'),
        'sf-semibold-italic': require('./src/fonts/SF-UI-Text-SemiboldItalic.otf'),
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
