import React from 'react';
import { SafeAreaView } from 'react-native';
import { SettingsList, ProfileCard } from '@components';
import { Wrapper } from '@styles';

export default class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    header: null,
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Wrapper>
          <ProfileCard name="Nasir Dowlat" points={4000} />
          <SettingsList />
        </Wrapper>
      </SafeAreaView>
    );
  }
}

// TODO: Word wrap for profile name
