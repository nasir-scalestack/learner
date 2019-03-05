import React from 'react';
import { Text } from 'react-native';

import Wrapper from '@styles';

export default class Search extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  render() {
    return (
      <Wrapper>
        <Text>Search Screen</Text>
      </Wrapper>
    );
  }
}
