import React from 'react';
import { Text } from 'react-native';

import Wrapper from '@styles';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <Wrapper>
        <Text>Home Screen</Text>
      </Wrapper>
    );
  }
}
