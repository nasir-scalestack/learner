import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class Welcome extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Welcome Screen</Text>
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
