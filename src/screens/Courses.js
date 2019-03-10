import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Wrapper } from '@styles';
import { Section } from '@components';
import styled from 'styled-components';
import normalize from '../helpers/normalizeText';

const Safe = styled.SafeAreaView`
  flex: 1;
`;

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

export default class Courses extends React.Component {
  static navigationOptions = {
    title: 'Courses',
    header: null,
  };

  render() {
    return (
      <Safe>
        <Wrapper>
          <Section title="My Courses">
            <Tabs>
              <TouchableOpacity onPress={() => console.log('All Courses!')}>
                <Tab active>All</Tab>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('Ongoing!')}>
                <Tab>Ongoing</Tab>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('Completed!')}>
                <Tab>Completed</Tab>
              </TouchableOpacity>
            </Tabs>
          </Section>
        </Wrapper>
      </Safe>
    );
  }
}
