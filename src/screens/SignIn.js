import React from 'react';
import { Text } from 'react-native';

import { Wrapper } from '@styles';

export default class SignIn extends React.Component {
  static navigationOptions = {
    title: 'SignIn',
    header: null,
  };

  render() {
    return (
      <Wrapper>
        <Text>SignIn Screen</Text>
      </Wrapper>
    );
  }
}
