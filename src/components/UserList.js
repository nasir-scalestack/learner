import React from 'react';
import { FlatList, View } from 'react-native';
import { Text } from '@components';
import { Image } from '@styles';
import styled from 'styled-components';

const User = styled.View`
  margin-left: 22;
  margin-right: 22;
`;

const UserList = ({ data }) => (
  <View>
    <Text.H4>START A NEW CHAT</Text.H4>
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item: { image } }) => (
        <User>
          <Image source={image} width={50} height={50} rounded />
        </User>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
);

export default UserList;
