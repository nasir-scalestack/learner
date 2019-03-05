import React from 'react';
import { ScrollView, StyleSheet, Text, Image } from 'react-native';

export default class SignIn extends React.Component {
  static navigationOptions = {
    title: 'SignIn',
    header: null
  };

  render() {
    return (
      <ScrollView style={styles.container}>
              <Image
          style={styles.stretch}
          source={require('../assets/images/illustrations/welcome-artwork.png')}
        />
        <Text>SignIn Screen</Text>
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
