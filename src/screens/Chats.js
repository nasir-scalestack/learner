import React from 'react';
import { Text } from 'react-native';

import Page from '../components/styles/Page';

export default class Chats extends React.Component {
  static navigationOptions = {
    title: 'Chats',
  };

  render() {
    return (
      <Page>
        <Text>Chats Screen</Text>
      </Page>
    );
  }
}
