import React from 'react';
import { Text } from 'react-native';

import { Wrapper } from '@styles';

export default class Join extends React.Component {
  static navigationOptions = {
    title: 'Join',
    header: null,
  };

  render() {
    return (
      <Wrapper>
        <Text>Join Screen</Text>
      </Wrapper>
    );
  }
}
