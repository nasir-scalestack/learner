import React from 'react';
import { Text } from 'react-native';

import Wrapper from '@styles';

export default class Courses extends React.Component {
  static navigationOptions = {
    title: 'Courses',
  };

  render() {
    return (
      <Wrapper>
        <Text>Courses Screen</Text>
      </Wrapper>
    );
  }
}
