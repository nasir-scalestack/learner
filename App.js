/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React from 'react';
import { Platform, StatusBar, YellowBox } from 'react-native';
import { AppLoading, Font, Icon, Asset } from 'expo';
import styled, { ThemeProvider } from 'styled-components';
import AppNavigator from './src/navigation/AppNavigator';

YellowBox.ignoreWarnings(['Require cycle:', 'Remote debugger']);

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }
    return Asset.fromModule(image).downloadAsync();
  });
}

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  _loadResourcesAsync = async () => {
    const imageAssets = cacheImages([
      require('./src/assets/default-profile-image.png'),
      require('./src/assets/featured.png'),
      require('./src/assets/featured2.png'),
      require('./src/assets/featured3.png'),
      require('./src/assets/welcome-artwork.png'),
      require('./src/assets/picture1.png'),
      require('./src/assets/picture2.png'),
      require('./src/assets/picture3.png'),
      require('./src/assets/picture5.png'),
      require('./src/assets/recommended.png'),
      require('./src/assets/recommended2.png'),
      require('./src/assets/recommended3.png'),
      require('./src/assets/recommended4.png'),
      require('./src/assets/home.png'),
      require('./src/assets/home-focused.png'),
      require('./src/assets/search.png'),
      require('./src/assets/search-focused.png'),
      require('./src/assets/messages.png'),
      require('./src/assets/messages-focused.png'),
      require('./src/assets/more.png'),
      require('./src/assets/more-focused.png'),
      require('./src/assets/my-course.png'),
      require('./src/assets/my-course-focused.png'),
      require('./src/assets/optionsIcon.png'),
      require('./src/assets/categories/business.png'),
      require('./src/assets/categories/computing.png'),
      require('./src/assets/categories/design.png'),
      require('./src/assets/categories/economy.png'),
      require('./src/assets/categories/literature.png'),
      require('./src/assets/categories/science.png'),
    ]);

    return Promise.all([
      ...imageAssets,
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        'sf-ui-bold': require('./src/fonts/SF-UI-Text-Bold.otf'),
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

// TODO: Create cards with headers, footers
// TODO: Create ListItem that accepts leftAvatar, Subtitle
// TODO: Remove importing Image style and make a Avatar component which takes a badge (online, offline)
// TODO: Create a Badge component
