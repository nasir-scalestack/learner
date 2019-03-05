import React from 'react';
import { LinearGradient } from 'expo';
import { SignInForm } from '@components';
import { Wrapper } from '@styles';

export default class Join extends React.Component {
  static navigationOptions = {
    title: null,
    headerTransparent: true,
  };

  loginUser = values => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  };

  render() {
    return (
      <LinearGradient
        colors={['rgba(239,241,245,0.74)', '#ffffff']}
        style={{ flex: 1 }}
      >
        <Wrapper>
          <SignInForm onSubmit={this.loginUser} />
        </Wrapper>
      </LinearGradient>
    );
  }
}
