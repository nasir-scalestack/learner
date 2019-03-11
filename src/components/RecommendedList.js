import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem, Section } from '@components';

export default class Recommended extends Component {
  render() {
    const { data } = this.props;
    return (
      <Section title="Recommended">
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: { image, name, category } }) => (
            <ListItem image={image} title={name} caption={category} profile />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Section>
    );
  }
}
