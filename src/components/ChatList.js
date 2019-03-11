import React from 'react';
import { FlatList, View } from 'react-native';
import { Text } from '@components';
import { Image } from '@styles';
import styled from 'styled-components';

const ChatItem = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

const Message = styled.Text``;

const ChatList = ({ data }) => (
  <FlatList
    data={data}
    showsHorizontalScrollIndicator={false}
    renderItem={({ item: { name, message, image } }) => (
      <ChatItem>
        <View>
          <Image source={image} width={50} height={50} rounded />
        </View>
        <View>
          <Text.H3>{name}</Text.H3>
          <Message>{message}</Message>
        </View>
      </ChatItem>
    )}
    keyExtractor={(item, index) => index.toString()}
  />
);

export default ChatList;
