import React from 'react';
import { Text } from 'react-native';

import { Wrapper } from '@styles';

export default class Join extends React.Component {
  static navigationOptions = {
    title: null,
    headerTransparent: true,
  };

  render() {
    return (
      <Wrapper>
        <Text>Join Screen</Text>
      </Wrapper>
    );
  }
}
