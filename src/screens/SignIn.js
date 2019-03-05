import React from 'react';
import { Image, Text } from 'react-native';

import * as images from '@assets';

import Page from '../components/styles/Page';

export default class SignIn extends React.Component {
  static navigationOptions = {
    title: 'SignIn',
    header: null,
  };

  render() {
    return (
      <Page>
        <Image source={images.welcomeArtwork} />
        <Text>SignIn Screen</Text>
      </Page>
    );
  }
}
