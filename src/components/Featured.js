import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem, Section } from '@components';

export default class Featured extends Component {
  render() {
    const { data } = this.props;
    return (
      <Section
        title="Featured"
        button={{
          title: 'SEE ALL',
          onPress: () => console.log('click'),
        }}
      >
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: { image, title, price } }) => (
            <ListItem
              image={image}
              title={title}
              caption={price}
              imageWidth={120}
              imageHeight={145}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Section>
    );
  }
}
