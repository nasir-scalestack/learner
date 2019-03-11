import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Image, Wrapper } from '@styles';
import { Text, Grid, Col, Section, ProgressBar } from '@components';
import styled from 'styled-components';
import normalize from '../helpers/normalizeText';
import {
  recommendedOne,
  recommendedTwo,
  recommendedThree,
  recommendedFour,
  optionsIcon,
} from '@assets';

const Safe = styled.SafeAreaView`
  flex: 1;
`;

const Tabs = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 25;
  margin-bottom: 25;
`;

const Tab = styled.Text`
  color: ${props => (props.active ? '#6665FF' : '#A2AAB5')};
  text-decoration: ${props => props.active && 'underline'};
  text-decoration-color: ${props => (props.active ? '#6665FF' : '#A2AAB5')};
  font-size: ${normalize(20)};
`;

const CouseCardWrapper = styled.View`
  flex: 1;
  margin-left: 10;
  margin-right: 10;
  background-color: #ffffff;
  justify-content: space-between;
  padding-top: 15;
  padding-bottom: 15;
  padding-right: 15;
  padding-left: 15;
  border-radius: 8;
`;

const CouseCardHeader = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CourseCard = ({ title, image, progress }) => (
  <CouseCardWrapper>
    <CouseCardHeader>
      <View>
        <Image source={image} width={40} height={40} rounded />
      </View>
      <View>
        <Image source={optionsIcon} width={3.7} height={16} />
      </View>
    </CouseCardHeader>
    <View>
      <Text.H3>{title}</Text.H3>
      <ProgressBar percentage={progress} />
    </View>
  </CouseCardWrapper>
);

const CoursesList = () => (
  <Grid>
    <Col height={140} width={50}>
      <CourseCard
        image={recommendedOne}
        title="Business Management"
        progress={50}
      />
    </Col>
    <Col height={140} width={50}>
      <CourseCard image={recommendedTwo} title="IT Cloud" progress={45} />
    </Col>
    <Col height={140} width={50}>
      <CourseCard
        image={recommendedThree}
        title="Learn how to play guitar"
        progress={60}
      />
    </Col>
    <Col height={140} width={50}>
      <CourseCard
        image={recommendedFour}
        title="Basics of baking cake"
        progress={80}
      />
    </Col>
  </Grid>
);

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
