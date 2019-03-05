import React from 'react';
import { Wrapper } from '@styles';
import { SignUpForm } from '@components';
import { LinearGradient } from 'expo';

export default class SignIn extends React.Component {
  static navigationOptions = {
    title: null,
    headerTransparent: true,
  };

  createUser = () => {
    console.log('Clicked');
  };

  render() {
    return (
      <LinearGradient
        colors={['rgba(239,241,245,0.74)', '#ffffff']}
        style={{ flex: 1 }}
      >
        <Wrapper grey>
          <SignUpForm onSubmit={this.createUser} />
        </Wrapper>
      </LinearGradient>
    );
  }
}
