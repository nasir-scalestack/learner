import React, { Component } from 'react';
import styled from 'styled-components';
import { Image } from '@styles';

const ListWrapper = styled.View`
  width: 160;
`;

const Text = styled.Text``;

export default class ListItem extends Component {
  static defaultProps = {
    caption: '',
    image: '',
    imageWidth: null,
    imageHeight: null,
    title: '',
  };

  render() {
    const {
      image,
      imageWidth,
      imageHeight,
      title,
      caption,
      profile,
    } = this.props;

    return (
      <ListWrapper>
        <Image
          source={image}
          width={imageWidth}
          height={imageHeight}
          borderRadius={profile ? imageWidth / 2 : 20}
        />
        {title && <Text>{title}</Text>}
        {caption && <Text>{caption}</Text>}
      </ListWrapper>
    );
  }
}
