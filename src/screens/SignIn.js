import React from 'react';
import { Image, Text } from 'react-native';

import welcomeArtwork from '@assets';

import Page from '../components/styles/Page';

export default class SignIn extends React.Component {
  static navigationOptions = {
    title: 'SignIn',
  };

  render() {
    return (
      <Page>
        <Image source={welcomeArtwork} />
        <Text>SignIn Screen</Text>
      </Page>
    );
  }
}
