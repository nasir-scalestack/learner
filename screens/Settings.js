import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Settings Screen</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
