import React from 'react';
import { Text } from 'react-native';

import Page from '../components/styles/Page';

export default class Search extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  render() {
    return (
      <Page>
        <Text>Search Screen</Text>
      </Page>
    );
  }
}
