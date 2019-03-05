import React from 'react';
import { Text } from 'react-native';

import Wrapper from '@styles';

export default class Chats extends React.Component {
  static navigationOptions = {
    title: 'Chats',
  };

  render() {
    return (
      <Wrapper>
        <Text>Chats Screen</Text>
      </Wrapper>
    );
  }
}
