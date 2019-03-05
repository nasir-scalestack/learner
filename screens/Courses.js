import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class Courses extends React.Component {
  static navigationOptions = {
    title: 'Courses',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Courses Screen</Text>
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
