import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components';

import { Wrapper } from '@styles';
import { welcomeArtwork } from '@assets';

const Text = styled.Text``;
const Button = styled.Button``;

export default class Welcome extends React.Component {
  static navigationOptions = {
    title: 'SignIn',
    header: null,
  };

  render() {
    const { navigation } = this.props;
    return (
      <Wrapper>
        <Image source={welcomeArtwork} />
        <Text>SignIn Screen</Text>
        <Text>Lorem ipsum sit amet, Consectuteur adipscing</Text>
        <Button title="Get Start" onPress={() => navigation.navigate('Join')} />
        <Button title="Login" onPress={() => navigation.navigate('SignIn')} />
      </Wrapper>
    );
  }
}
