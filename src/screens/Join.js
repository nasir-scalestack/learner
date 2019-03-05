import React from 'react';
import { Text } from 'react-native';

import Page from '../components/styles/Page';

export default class Join extends React.Component {
  static navigationOptions = {
    title: 'Join',
  };

  render() {
    return (
      <Page>
        <Text>Join Screen</Text>
      </Page>
    );
  }
}
