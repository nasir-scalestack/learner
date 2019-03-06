import React from 'react';
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
      <Wrapper grey>
        <SignInForm onSubmit={this.loginUser} />
      </Wrapper>
    );
  }
}
