import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Tabs, Tab, Wrapper } from '@styles';
import { CoursesList, Section } from '@components';
import styled from 'styled-components';

const Safe = styled.SafeAreaView`
  flex: 1;
`;

export default class Courses extends React.Component {
  static navigationOptions = {
    title: 'Courses',
    header: null,
  };

  render() {
    return (
      <Safe>
        <Wrapper background="#EFF1F5">
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
            <CoursesList />
          </Section>
        </Wrapper>
      </Safe>
    );
  }
}
