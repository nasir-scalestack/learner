import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class Join extends React.Component {
  static navigationOptions = {
    title: 'Join',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Join Screen</Text>
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
