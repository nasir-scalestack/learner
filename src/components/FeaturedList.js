import React, { Component } from 'react';
import styled from 'styled-components';
import { FlatList, Text } from 'react-native';
import { Section } from '@components';
import { Image } from '@styles';

const ListImage = styled(Image)`
  border-radius: 20;
`;

const ListItem = styled.View`
  width: 160;
`;

export default class FeaturedList extends Component {
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
          renderItem={({ item: rowData }) => (
            <ListItem>
              <ListImage source={rowData.image} width={120} height={145} />
              <Text>{rowData.title}</Text>
              <Text>{rowData.price}</Text>
            </ListItem>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Section>
    );
  }
}
