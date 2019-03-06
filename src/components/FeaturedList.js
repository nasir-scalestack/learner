import React, { Component } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { FeaturedImage, FeaturedHeader, FeaturedCard } from '@styles';

export default class FeaturedList extends Component {
  render() {
    const { data } = this.props;
    return (
      <View>
        <FeaturedHeader>
          <Text>Featured</Text>
          <Button onPress={() => console.log('click')} title="SEE ALL" />
        </FeaturedHeader>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: rowData }) => (
            <FeaturedCard>
              <FeaturedImage source={rowData.image} width={120} height={145} />
              <Text>{rowData.title}</Text>
              <Text>{rowData.price}</Text>
            </FeaturedCard>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
