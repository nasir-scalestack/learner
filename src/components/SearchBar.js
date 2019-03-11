import React from 'react';
import styled from 'styled-components';
import { Button, Text } from 'react-native';
import { searchIconFocused } from '@assets';
import { TextInput } from '@styles';

const SearchWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-top: 18;
  padding-bottom: 18;
`;

const SearchBarInput = styled(TextInput)`
  flex: 1;
  padding-top: 10;
  padding-right: 10;
  padding-bottom: 10;
  padding-left: 0;
  background-color: #ffffff;
`;

const SearchIcon = styled.Image``;

export default class SearchBar extends React.Component {
  render() {
    return (
      <SearchWrapper>
        <SearchIcon source={searchIconFocused} />
        <SearchBarInput
          placeholder="Search..."
          placeholderTextColor="#BBC1C8"
        />
        <Button title="Filter" onPress={e => console.log(e)} />
        <Text>✖️</Text>
      </SearchWrapper>
    );
  }
}
