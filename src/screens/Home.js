import React from 'react';
import { Text } from 'react-native';

import Page from '../components/styles/Page';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <Page>
        <Text>Home Screen</Text>
      </Page>
    );
  }
}
