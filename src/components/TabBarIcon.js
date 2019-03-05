import React from 'react';
import { Image } from 'react-native';

export default class TabBarIcon extends React.Component {
  render() {
    const { image, imageFocused, focused } = this.props;
    return (
      <Image
        source={focused ? imageFocused : image}
        fadeDuration={0}
        style={{ width: 26, height: 26 }}
      />
    );
  }
}
