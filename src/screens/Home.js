import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo';
import { Wrapper } from '@styles';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <LinearGradient
        colors={['rgba(239,241,245,0.74)', '#ffffff']}
        style={{ flex: 1 }}
      >
        <Wrapper grey>
          <Text>Home Screen</Text>
        </Wrapper>
      </LinearGradient>
    );
  }
}
