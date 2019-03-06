import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem, Section } from '@components';

export default class Instructors extends Component {
  render() {
    const { data } = this.props;
    return (
      <Section title="Top Instructors">
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: { image, name, position } }) => (
            <ListItem image={image} title={name} caption={position} profile />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Section>
    );
  }
}
