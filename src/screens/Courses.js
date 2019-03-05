import React from 'react';
import { Text } from 'react-native';

import Page from '../components/styles/Page';

export default class Courses extends React.Component {
  static navigationOptions = {
    title: 'Courses',
  };

  render() {
    return (
      <Page>
        <Text>Courses Screen</Text>
      </Page>
    );
  }
}
