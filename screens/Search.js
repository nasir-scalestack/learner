import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class Search extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Search Screen</Text>
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
