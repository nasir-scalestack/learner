import React from 'react';
import { Text } from 'react-native';

import Page from '../components/styles/Page';

export default class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <Page>
        <Text>Settings Screen</Text>
      </Page>
    );
  }
}
