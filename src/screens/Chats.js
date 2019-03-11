import React from 'react';
import { TouchableOpacity } from 'react-native';
import { defaultProfileImg } from '@assets';
import { Wrapper } from '@styles';
import { ChatList, Section } from '@components';
import styled from 'styled-components';
import normalize from '../helpers/normalizeText';

const CHAT_DATA = [
  {
    name: 'Hannah Tran',
    message: 'Hi Hannah, Good Morning!',
    image: defaultProfileImg,
  },
  {
    name: 'Louise McGee',
    message: 'Is question 2 relation to question 1',
    image: defaultProfileImg,
  },
  {
    name: 'Walter Osborne',
    message: 'Thanks, I will get back to you',
    image: defaultProfileImg,
  },
  {
    name: 'Margaret Monroe',
    message: 'Let me check that',
    image: defaultProfileImg,
  },
];

const Tabs = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Tab = styled.Text`
  color: ${props => (props.active ? '#6665FF' : '#A2AAB5')};
  text-decoration: ${props => props.active && 'underline'};
  text-decoration-color: ${props => (props.active ? '#6665FF' : '#A2AAB5')};
  font-size: ${normalize(20)};
`;

export default class Chats extends React.Component {
  static navigationOptions = {
    title: 'Chats',
    header: null,
  };

  render() {
    return (
      <Wrapper>
        <Section
          title="Chats"
          button={{
            title: 'Search',
            onPress: () => console.log('click'),
          }}
        >
          <Tabs>
            <TouchableOpacity onPress={() => console.log('All Courses!')}>
              <Tab active>All</Tab>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Instructors!')}>
              <Tab>Instructors</Tab>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Friends!')}>
              <Tab>Friends</Tab>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Bots!')}>
              <Tab>Bots</Tab>
            </TouchableOpacity>
          </Tabs>
          <ChatList data={CHAT_DATA} />
        </Section>
      </Wrapper>
    );
  }
}
