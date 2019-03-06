/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React from 'react';
import { Platform, StatusBar, YellowBox } from 'react-native';
import { AppLoading, Font, Icon } from 'expo';
import styled, { ThemeProvider } from 'styled-components';
import AppNavigator from './src/navigation/AppNavigator';

YellowBox.ignoreWarnings(['Require cycle:', 'Remote debugger']);

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
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
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
        <ThemeProvider
          theme={{
            white: '#ffffff',
            grey: '#EFF1F5',
          }}
        >
          <AppNavigator />
        </ThemeProvider>
      </Container>
    );
  }
}
