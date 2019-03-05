import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/illustrations/welcome-artwork.png')
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'sf-bold': require('./assets/fonts/SF-UI-Text-Bold.otf'),
        'sf-bold-italic': require('./assets/fonts/SF-UI-Text-BoldItalic.otf'),
        'sf-heavy': require('./assets/fonts/SF-UI-Text-Heavy.otf'),
        'sf-heavy-italic': require('./assets/fonts/SF-UI-Text-HeavyItalic.otf'),
        'sf-italic': require('./assets/fonts/SF-UI-Text-Italic.otf'),
        'sf-light': require('./assets/fonts/SF-UI-Text-Light.otf'),
        'sf-light-italic': require('./assets/fonts/SF-UI-Text-LightItalic.otf'),
        'sf-medium': require('./assets/fonts/SF-UI-Text-Medium.otf'),
        'sf-medium-italic': require('./assets/fonts/SF-UI-Text-MediumItalic.otf'),
        'sf-regular': require('./assets/fonts/SF-UI-Text-Regular.otf'),
        'sf-semibold': require('./assets/fonts/SF-UI-Text-Semibold.otf'),
        'sf-semibold-italic': require('./assets/fonts/SF-UI-Text-SemiboldItalic.otf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
