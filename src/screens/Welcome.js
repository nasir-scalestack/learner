import React from 'react';
import { Text, Button } from 'react-native';

import { Image, Wrapper } from '@styles';
import { welcomeArtwork } from '@assets';

export default class Welcome extends React.Component {
  static navigationOptions = {
    title: 'SignIn',
    header: null,
    headerBackTitle: null,
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
