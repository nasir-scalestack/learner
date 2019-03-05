import React from 'react';
import { Text } from 'react-native';
import { Wrapper } from '@styles';

export default class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <Wrapper>
        <Text>Settings Screen</Text>
      </Wrapper>
    );
  }
}
